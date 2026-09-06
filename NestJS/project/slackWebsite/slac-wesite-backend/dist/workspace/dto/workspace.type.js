var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, ObjectType } from '@nestjs/graphql';
let Workspace = class Workspace {
    id;
    name;
    description;
    joinCode;
};
__decorate([
    Field(),
    __metadata("design:type", Number)
], Workspace.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], Workspace.prototype, "name", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Workspace.prototype, "description", void 0);
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", String)
], Workspace.prototype, "joinCode", void 0);
Workspace = __decorate([
    ObjectType()
], Workspace);
export { Workspace };
let WorkspacesResponse = class WorkspacesResponse {
    success;
    message;
    data;
};
__decorate([
    Field(),
    __metadata("design:type", Boolean)
], WorkspacesResponse.prototype, "success", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], WorkspacesResponse.prototype, "message", void 0);
__decorate([
    Field(() => Workspace, { nullable: true }),
    __metadata("design:type", Workspace)
], WorkspacesResponse.prototype, "data", void 0);
WorkspacesResponse = __decorate([
    ObjectType()
], WorkspacesResponse);
export { WorkspacesResponse };
//# sourceMappingURL=workspace.type.js.map