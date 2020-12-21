// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    ResourceServer: "https://auth-api-sso-qa.metodologiagb.com.br/",
    IssuerUri:  "https://auth-sso-qa.metodologiagb.com.br",
    RequireHttps: false,
    Uri: "http://localhost:4300",
    defaultTheme: "E",
    version: "3.0.3"
    //defaultTheme: "C",
    //version: "3.0.3"
  };