interface IConfing {
  development: Object;
  production: Object;
  test: Object;
  [key: string]: Object; // IFoo is indexable; not a new property
}

//TODO fetech data from .env
export default (env:string= 'development')=>{

const development = {
  port: 1337,
  host: "localhost",
  dbUri: "mongodb://localhost:27017/tearaf",
};

const production = {
  ...development
}

const test = {
  ...development
}

const configObj: IConfing = {
    development, production, test

}

return  configObj[env]
}
