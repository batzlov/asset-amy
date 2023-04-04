import { Module } from "@nestjs/common";
import {
    AppController,
    AssetsController,
    ExpensesController,
    RevenuesController,
    UsersController,
} from "./controllers";
import {
    AppService,
    AssetsService,
    ExpensesService,
    RevenuesService,
    UsersService,
} from "./services";

@Module({
    imports: [],
    controllers: [
        AppController,
        UsersController,
        ExpensesController,
        AssetsController,
        RevenuesController,
    ],
    providers: [
        AppService,
        UsersService,
        ExpensesService,
        AssetsService,
        RevenuesService,
    ],
})
export class AppModule {}
