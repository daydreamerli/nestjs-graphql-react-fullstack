import {Injectable,ExecutionContext,} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';


@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(conntext: ExecutionContext) {
    const ctx = GqlExecutionContext.create(conntext)
    return ctx.getContext().req;
  }
}