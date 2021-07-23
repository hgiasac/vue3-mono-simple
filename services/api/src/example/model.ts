import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../shared/db";

// These are all the attributes in the Example model
type ExampleAttributes = {
  id: number;
};

// Some attributes are optional in `User.build` and `User.create` calls
type ExampleCreationAttributes = Optional<ExampleAttributes, "id">;

export class Example extends Model<
  ExampleAttributes,
  ExampleCreationAttributes
> {}

Example.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    sequelize,
    underscored: true,
    tableName: "example",
  }
);
