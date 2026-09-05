import { InputType } from "@nestjs/graphql";
import { CreateWorkspaceInput } from "./create.workspace.input.js";

@InputType()
export class UpdateWorkspaceInput implements Partial<CreateWorkspaceInput> {

}