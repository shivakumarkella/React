{ types and functions declarations are based on the information from the wiki }
unit sendemail;

interface


type
  TSmtpEmailData = record
    Host: string;
    User: string;
    Password: string;
    SMTPSSL: integer;
    SMTPTSLMode: integer;
    Port: string;
    From: string;
    ToList: string;
    Priority: integer;
    Subject: string;
    Body: string;
    ContentType:string;
    AttFileList:string;
    HandleExceptions:integer;
  end;

Procedure SendEmail( const Host, Login, Password, Port, EmFrom, EmTo, EmSubject, EmBody: string; EmAttachments: TStringList; const ContentType: string);
Function SendEmailSafe( const Host, Login, Password, Port, EmFrom, EmTo, EmSubject, EmBody: string; const EmAttachments: TStringList; const ContentType: string): string;
function SendEmailEx( EmlData: TSmtpEmailData; var Err: string ): Boolean;

implementation

Function SendEmailSafe( const Host, Login, Password, Port, EmFrom, EmTo, EmSubject, EmBody: string; const EmAttachments: TStringList; const ContentType: string): string;
begin
  Result:='';
end;

Procedure SendEmail( const Host, Login, Password, Port, EmFrom, EmTo, EmSubject, EmBody: string; EmAttachments: TStringList; const ContentType: string);
begin
end;

function SendEmailEx( EmlData: TSmtpEmailData; var Err: string ): Boolean;
begin
  Result:=False;
end;

end.