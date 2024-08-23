unit encrypt;

interface

function BF_Encryption(const data: string; const key: string; DoEncrypt: Boolean): string;

implementation

function BF_Encryption(const data: string; const key: string; DoEncrypt: Boolean): string;
begin
  Result:='';
end;

end.