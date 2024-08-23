unit stingray;

interface

//type
//  TSQLConnection = TObject;

var
  ReqList: TStringList;
  fSQLConnection: TSQLConnection;

type
  TCharacterSet = set of char;

function StrToIntDef(const s: string; def: integer): integer;
function StrToFloat(const s: string): double;
function StrToFloatDef(const s: string; def: double): double;
function StrToDateTime(const s: string): TDateTime;
function StrToDateTimeDef(const s: string; def: TDatetime): TDatetime;
function StrToBool(const s: string): Boolean;
function StrToBoolDef(const s: string; def: Boolean): Boolean;
function DatetimetoStr(d: TDateTime): string;

function ReplaceString(const s: string; oldpattern, newpattern: string; IgnoreCase: boolean): String;
Function ReplaceAllStringParams( const SearchStr: String; const StrLists: TStringList; const BeginStr, EndStr: String; BlankUnmatched: Boolean): String;
function KeepStringCharacters( const InputString: string; KeepCharacters: TCharacterSet ): string;

function IncYear(datetime: TDateTime; AddYear: Integer): TDateTime;
function IncMonth(datetime: TDateTime; AddMonth: Integer): TDateTime;
function IncDay(datetime: TDateTime; AddDays: Integer): TDateTime;

function RoundMoney(mn: single; roundto: single): single;

function RecalculateBills (Lob: Integer; Pol: string; dt: TDatetime; sql: TSQLConnection; initBill: Boolean): Boolean;
function EarnedPremiumByDate(LOB: Integer; Pol: string; Tday: TDatetime; FSQLConnection: TSQLConnection; ReqList: TStringList): Boolean;
function GetPaidToDate( LOB: Integer; Pol: string; TRT: string; AccTotal, BalanceTotal: Double; 
  IncDate, EffDate, ExpDate: TDateTime; SomeStuff: Integer; Sql: TSQLConnection): TDateTime;

procedure ExecuteCompiledScript(filepath: string; sql: TSQLConnection; ReqList: TStringList);

function UpdateWrittenPremium(lob: Integer; PolicyCode: string; sql: TSQLConnection): Boolean;
function UpdateEarnedPremium( const LOBID: integer; const PolicyCode: string; const PremiumDate: TDateTime; const SQLConnection: TSQLConnection ): boolean;

function ProcessMathExpression( Expression : string; FormatStr: String) : String;
function ProcessExpression( Expression : string) : Boolean;

implementation

function ProcessExpression( Expression : string) : Boolean;
begin
  Result:=false;
end;

function ProcessMathExpression( Expression : string; FormatStr: String) : String;
begin
  Result:='';
end;

function EarnedPremiumByDate(LOB: Integer; Pol: string; Tday: TDatetime; FSQLConnection: TSQLConnection; ReqList: TStringList): Boolean;
begin
  Result:=False;
end;

function RecalculateBills (Lob: Integer; Pol: string; dt: TDatetime; sql: TSQLConnection; initBill: Boolean): Boolean;
begin
  Result:=true;
end;

function GetPaidToDate( LOB: Integer; Pol: string; TRT: string; AccTotal, BalanceTotal: Double; 
  IncDate, EffDate, ExpDate: TDateTime; SomeStuff: Integer; Sql: TSQLConnection): TDateTime;
begin
  Result:=0;
end;

function DatetimetoStr(d: TDateTime): string;
begin
  Result:='';
end;

function RoundMoney(mn: single; roundto: single): single;
begin
  Result:=0;
end;

function IncYear(datetime: TDateTime; AddYear: Integer): TDateTime;
begin
  Result:=0;
end;

function IncMonth(datetime: TDateTime; AddMonth: Integer): TDateTime;
begin
  Result:=0;
end;

function IncDay(datetime: TDateTime; AddDays: Integer): TDateTime;
begin
  Result:=0;
end;

function StrToIntDef(const s: string; def: integer): integer;
begin
  Result:=0;
end;

function StrToFloatDef(const s: string; def: double): double;
begin
  Result:=0;
end;

function StrToDateTimeDef(const s: string; def: TDatetime): TDatetime;
begin
  Result:=0;
end;

function ReplaceString(const s: string; oldpattern, newpattern: string; IgnoreCase: boolean): String;
begin
  Result:='';
end;

function StrToDateTime(const s: string): TDateTime;
begin
  Result:=0;
end;

function StrToFloat(const s: string): double;
begin
  Result:=0;
end;

function StrToBool(const s: string): Boolean;
begin
  Result:=False;
end;

function StrToBoolDef(const s: string; def: Boolean): Boolean;
begin
  Result:=False;
end;

Function ReplaceAllStringParams( const SearchStr: String; const StrLists: TStringList; const BeginStr, EndStr: String; BlankUnmatched: Boolean): String; 
begin  
end;

procedure ExecuteCompiledScript(filepath: string; sql: TSQLConnection; ReqList: TStringList);
begin
end;

function KeepStringCharacters( const InputString: string; KeepCharacters: TCharacterSet ): string;
begin
  Result:='';
end;

function UpdateWrittenPremium(lob: Integer; PolicyCode: string; sql: TSQLConnection): boolean;
begin
  Result:=False;
end; 

function UpdateEarnedPremium( const LOBID: integer; const PolicyCode: string; const PremiumDate: TDateTime; const SQLConnection: TSQLConnection ): boolean;
begin
  Result:=False;
end;

end.
