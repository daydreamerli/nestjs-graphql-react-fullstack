import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ComponentsModule } from './components/components.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      //  autoSchemaFile: true,    // In memory Schema
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      context: ({ req,res }) => ({ req,res })
    }),
    ComponentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}