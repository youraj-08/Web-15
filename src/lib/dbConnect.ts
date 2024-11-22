import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

export default async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to database");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})

        connection.isConnected = db.connections[0].readyState

        console.log("DB connected successfully");
        console.log(db.Collection);
        console.log(db);
        
        

    } catch (error) {
        console.log("Database connection failed", error);

        process.exit(1)

    }
}