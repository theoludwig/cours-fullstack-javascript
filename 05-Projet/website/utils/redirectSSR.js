function redirectSSR(context, path)  {
    context.res.writeHead(301, { Location: path });
    context.res.end();
}

export default redirectSSR;