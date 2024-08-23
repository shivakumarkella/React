unit ftp;

interface

type
  TFTP_ConnectionParams = record
    FTP_Host: string;
    FTP_Port: integer;
    FTP_PassMode: integer;
    FTP_User: string;
    FTP_Passw: string;
    FTP_Path: string;
    FTP_Verify: integer; //added FTP upload file check #16893
    //FTPS parameters are not required for regular FTP connection
    FTPS_DataSecured: integer; // keep it true (1) for AAMVA server!
    FTPS_PassPhrase: string;
    FTPS_Account: string; // optional?
    FTPS_CertKey: string;
    FTPS_PrivateKey: string;
    FTPS_CAPath: string;
  end;


function FTP_Upload( const FTP_Param: TFTP_ConnectionParams; const FileList: TStringList; var ErrStr: string ): boolean;
function FTP_Download( const FTP_Param: TFTP_ConnectionParams; const FileList: TStringList; const TargetPath: string; var ErrStr: string ): boolean;
function FTP_List( const FTP_Param: TFTP_ConnectionParams; var ErrStr: string; var FileList: TStringList ): boolean;
function FTP_DeleteFiles( const FTP_Param: TFTP_ConnectionParams; const FileList: TStringList; var ErrStr: string ): boolean;

function FTPS_Upload( const FTP_Param: TFTP_ConnectionParams; const FileList: TStringList; var Log, ErrStr: string ): boolean;
function FTPS_Download( const FTP_Param: TFTP_ConnectionParams; const FileList: TStringList; const TargetPath: string; var Log, ErrStr: string ): boolean;
function FTPS_List( const FTP_Param: TFTP_ConnectionParams; var Log, ErrStr: string; var FileList: TStringList ): boolean;
function FTPS_DeleteFiles( const FTP_Param: TFTP_ConnectionParams; const FileList: TStringList; var Log, ErrStr: string ): boolean;


implementation

function FTP_Upload( const FTP_Param: TFTP_ConnectionParams; const FileList: TStringList; var ErrStr: string ): boolean;
begin
  Result:=false;
end;

function FTP_Download( const FTP_Param: TFTP_ConnectionParams; const FileList: TStringList; const TargetPath: string; var ErrStr: string ): boolean;
begin
  Result:=false;
end;

function FTP_List( const FTP_Param: TFTP_ConnectionParams; var ErrStr: string; var FileList: TStringList ): boolean;
begin
  Result:=false;
end;

function FTP_DeleteFiles( const FTP_Param: TFTP_ConnectionParams; const FileList: TStringList; var ErrStr: string ): boolean;
begin
  Result:=false;
end;

function FTPS_Upload( const FTP_Param: TFTP_ConnectionParams; const FileList: TStringList; var Log, ErrStr: string ): boolean;
begin
  Result:=false;
end;

function FTPS_Download( const FTP_Param: TFTP_ConnectionParams; const FileList: TStringList; const TargetPath: string; var Log, ErrStr: string ): boolean;
begin
  Result:=false;
end;

function FTPS_List( const FTP_Param: TFTP_ConnectionParams; var Log, ErrStr: string; var FileList: TStringList ): boolean;
begin
  Result:=false;
end;

function FTPS_DeleteFiles( const FTP_Param: TFTP_ConnectionParams; const FileList: TStringList; var Log, ErrStr: string ): boolean;
begin
  Result:=false;
end;


end.