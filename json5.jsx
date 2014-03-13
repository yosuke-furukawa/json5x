native class JSON5 {
    static function parse(str:string) : variant;
    static function stringify(json:variant) : string;
} = "require('json5')";
