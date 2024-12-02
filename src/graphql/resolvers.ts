import { db } from "./data";

declare interface WeatherInterface {
    zip: string;
    weather: string;
    tempC: string;
    tempF: string;
    friends: string[];
}

export const resolvers = {
    Query: {
        weather: async (_: any, { zip }: { zip: string }) => {
            return db.filter((item) => item.zip === zip);
        }
    },
    Mutation: {
        weather: async (_: any, { data }: { data: WeatherInterface }) => {
            return db.filter((item) => item.zip === data.zip);
        }
    }
};
