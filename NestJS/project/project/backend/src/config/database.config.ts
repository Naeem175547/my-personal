import { ConfigService } from "@nestjs/config"
export const databaseConfig = (configService: ConfigService) => ({
    type: 'mysql' as const,//as const is a TypeScript feature that makes the value an exact literal instead of a general type
    host: configService.get('DB_HOST'),
    port: Number(configService.get('DB_PORT')),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    autoLoadEntities: true,
    synchronize: false
})