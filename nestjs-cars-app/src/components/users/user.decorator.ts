import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    if (context.getType() === 'http') {
          console.log(context.switchToHttp().getRequest().user.id)
          return context.switchToHttp().getRequest().user;
      }

    const ctx = GqlExecutionContext.create(context);
      console.log("Current User: "+ctx.getContext().req.user.email)
      return ctx.getContext().req.user;
  }
)

// export const CurrentUser = createParamDecorator(
//   (data: unknown, context: ExecutionContext) => {
//     console.log(GqlExecutionContext.create(context).getContext().req.user.id );
//     const { id,email } = GqlExecutionContext.create(
//       context,
//     ).getContext().req.user;
//     return {
//       id,email
//     };
//   },
// );