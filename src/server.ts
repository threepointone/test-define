import type * as Party from "partykit/server";

export default class Server implements Party.Server {
  static onFetch(request: Party.Request) {
    return new Response(process.env.MY_VAR + " " + process.env.MY_STR);
  }
}

Server satisfies Party.Worker;
