import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { v4 as uuid } from "uuid";

@ObjectType()
@Entity()
export class User {
	@Field()
	@PrimaryKey()
	id: string = uuid();

	@Field()
	@Property({ unique: true })
	username!: string;

	@Field()
	@Property({ unique: true })
	email!: string;

	@Property()
	password!: string;

	@Field()
	@Property()
	tokenVersion: number = 0;

	@Field(() => String)
	@Property({ type: "date" })
	createdAt = new Date();

	@Field(() => String)
	@Property({ type: "date", onUpdate: () => new Date() })
	updatedAt = new Date();
}
