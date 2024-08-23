unit images;

interface

function ResizeImage( const SourceFileName, TargetFileName: string; 
  const Ratio, NewWidth, NewHeight : integer; var ResultMsg: string ): boolean;

implementation

function ResizeImage( const SourceFileName, TargetFileName: string; 
  const Ratio, NewWidth, NewHeight : integer; var ResultMsg: string ): boolean;
begin
  Result:=False;
end;

end.