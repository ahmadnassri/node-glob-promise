let glob: Glob;

interface Glob {
  (path: string, opts?: {
    cwd?: string;
    root?: string;
    dot?: boolean;
    nomount?: boolean;
    mark?: boolean;
    nosort?: boolean;
    stat?: boolean;
    silent?: boolean;
    strict?: boolean;
    cache?: boolean;
    statCache?: boolean;
    symLinks?: boolean;
    nounique?: boolean;
    nonull?: boolean;
    debug?: boolean;
    nobrace?: boolean;
    noglobstar?: boolean;
    noext?: boolean;
    nocase?: boolean;
    matchBase?: boolean;
    nodir?: boolean;
    ignore?: string | Array<string>;
    follow?: boolean;
    realpath?: boolean;
  }): Promise<Array<string>>;
}

export = glob;
