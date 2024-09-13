"use strict"; // Para que no se puedan declarar variables sin var, let o const
import { EntitySchema } from "typeorm";

const UserSchema = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true
        },
        name: {
            type: "varchar",
            length: 255,
            nullable: false
        },
        rut: {
            type: "varchar",
            length: 12,
            nullable: false
        },
        email: {
            type: "varchar",
            length: 255,
            nullable: false
        },
        createAt: {
            type: "time with time zone",
            default: () => "current_timestamp",
            nullable: false
        },
        updateAt: {
            type: "time with time zone",
            default: () => "current_timestamp",
            onUpdate: "current_timestamp",
            nullable: false
        }
    }
});

export default UserSchema;