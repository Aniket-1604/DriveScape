import { integer, serial, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "drizzle-orm/pg-core";

export const Users=pgTable('users',{
    id: serial('id').primaryKey() ,
    name: varchar('name').notNull(),
    email: varchar('email').notNull(),
    imageUrl: varchar('imageUrl').notNull(),
    credits: integer('credits').default(3)
})

export const AiGeneratedImage=pgTable('aiGeneartedImage',{
    id: serial('id').primaryKey(),
    carType: varchar('carType').notNull(),
    designType: varchar('designType').notNull(),
    orgImage: varchar('orgImage').notNull(),
    aiImage: varchar('aiImage').notNull(),
    userEmail: varchar('userEmail')
})