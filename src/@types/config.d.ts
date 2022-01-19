declare interface Config extends RootInterface {}

declare module 'config' {
    const config: RootInterface;
    export default config;
    export interface Config extends RootInterface {}
}

interface RootInterface {
    server: Server;
    view: View;
}

interface Server {
    port: number;
}

interface View {
    engine: string;
    directory: string;
}