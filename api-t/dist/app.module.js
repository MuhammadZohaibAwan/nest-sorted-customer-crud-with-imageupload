"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const customer_module_1 = require("./customer/customer.module");
const typeorm_1 = require("@nestjs/typeorm");
const customer_entity_1 = require("./customer/entities/customer.entity");
const multer_1 = require("@nestjs/platform-express/multer");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [multer_1.MulterModule.register({
                dest: '../uploads',
                limits: {
                    fileSize: 4 * 1024 * 1024,
                }
            }),
            customer_module_1.CustomerModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                password: 'secret',
                username: 'admin',
                entities: [customer_entity_1.Customer],
                database: 'postgres_db',
                synchronize: true,
                logging: true,
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map