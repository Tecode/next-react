import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { Helmet } from "react-helmet";

export default class MyDocument extends Document {
    render() {
        const { buildManifest } = this.props;
        const { css } = buildManifest;
        const helmet = Helmet.renderStatic();
        const htmlAttrs = helmet.htmlAttributes.toComponent();
        const bodyAttrs = helmet.bodyAttributes.toComponent();
        // console.log('buildManifest', buildManifest);
        // console.log('css', css);
        return (
            <html lang="zh-cn" {...htmlAttrs}>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
                    />
                    <link rel="manifest" href="static/manifest.json" />
                    <link rel="icon" href="static/img/favicon.ico" />
                    {css.map(file => (
                        <link rel="stylesheet" href={`/_next/${file}?version=${Math.random().toString(32)}`} key={file} />
                    ))}
                    <title>Next_Project</title>
                    {helmet.title.toComponent()}
                    {helmet.meta.toComponent()}
                    {helmet.link.toComponent()}
                </Head>
                <body {...bodyAttrs}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}