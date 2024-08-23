unit stingray;

interface

type
  TSQLConnection = TObject;
  TSQLQuery = TDataSource;

var
  ReqList: TStringList;
  fSQLConnection: TSQLConnection;

function StrToIntDef(const s: string; def: integer): integer;
function StrToFloatDef(const s: string; def: double): double;
function StrToDateTimeDef(const s: string; def: TDatetime): TDatetime;

function ReplaceString(const s: string; oldpattern, newpattern: string; IgnoreCase: boolean): String;

function IncYear(datetime: TDateTime; AddYear: Integer): TDateTime;
function IncMonth(datetime: TDateTime; AddMonth: Integer): TDateTime;
function IncDay(datetime: TDateTime; AddDays: Integer): TDateTime;

function RoundMoney(mn: single; roundto: single): single;

implementation

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

end.