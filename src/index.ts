const TARGET = 'https://github.com/iparchive';

export default {
  async fetch(request: Request): Promise<Response> {
    return Response.redirect(TARGET, 301);
  },
} satisfies ExportedHandler<undefined>;
