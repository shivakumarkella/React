unit report;

interface

function CreateReport(sREP_ID: string; PrintFileType: string; ReqList: TStringList; SqlConn: TSQLConnection): string;
function ReadFileToString(const FileName: string): string;
Function MergePDFReportsInStrings(const ReportStr1, ReportStr2: String): String;
function MergePDFReportsInFilesToFile(FilesList: TStrings; const FileName: String): Boolean;

implementation

function ReadFileToString(const FileName: string): string;
begin
  Result:='';
end;

function CreateReport(sREP_ID: string; PrintFileType: string; ReqList: TStringList; SqlConn: TSQLConnection): string;
begin
  Result:='';
end;

Function MergePDFReportsInStrings(const ReportStr1, ReportStr2: String): String;
begin
  Result:='';
end;

function MergePDFReportsInFilesToFile(FilesList: TStrings; const FileName: String): Boolean;
begin
  Result:='';
end;

end.