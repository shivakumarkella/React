unit files;

interface

function GetFileSize(const filename: string): integer;
procedure SaveStringToFile(const filename: string; data: string);
procedure DeleteFile(const filename: string);
procedure FileCopy( const sourcefilename, targetfilename: string; const ErrorIfTargetFileExists: Boolean );

function MaxUrlEncode(const url: string): string;
function HTTPRequest( const RQ_URL: string; const RQ_Method: string; const RQ_ContType: string; RQ_ParamString: string ): string;
function HTTPRequestExt( const RQ_URL: string; const RQ_Method: string; const RQ_ContType: string; RQ_ParamString: string ): string;

type
  TZipperParams = record
    TempDirectory: string;
    BaseDirectory: string;
    Recurse: integer;
    StripPath: integer;
    StripDrive: integer;
    SpannThreshold: integer;
    ZipFileName: string;
    Password: string;
  end;

  TUnZipperParams = record
    TempDirectory: string;
    ArchiveFileName: string;
    TargerPath: string;
    FileMask: string;
    CreateDirs: integer;
    RestorePath: integer;
    Password: string;
  end;

implementation

function ZIPFiles( const ZipperParams: TZipperParams; const FileList: TStringList; var ErrStr: string ): boolean;
begin
  Result:=False;
end;

function UnZIPFiles( const UnZipperParams: TUnZipperParams; var ErrStr: string ): boolean;
begin
  Result:=False;
end;

function MaxUrlEncode(const url: string): string;
begin
  Result:='';
end;

function GetFileSize(const filename: string): integer;
begin
  Result:=0;
end;

procedure DeleteFile(const filename: string);
begin
end;

procedure SaveStringToFile(const filename: string; data: string);
begin
  /// olololo
end;

procedure FileCopy( const sourcefilename, targetfilename: string; const ErrorIfTargetFileExists: Boolean );
begin
end;

function HTTPRequest( const RQ_URL: string; const RQ_Method: string; const RQ_ContType: string; RQ_ParamString: string ): string;
begin
  Result:='';
end;

function HTTPRequestExt( const RQ_URL: string; const RQ_Method: string; const RQ_ContType: string; RQ_ParamString: string ): string;
begin
  Result:='';
end;

end.