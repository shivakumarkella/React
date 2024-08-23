unit bluepay;

interface

type
  TCC_BluePay_Request = record
    Trans_Type: string;

    MasterID : string;
    Company_Name : string;

    Payment_Type: string;
    Payment_Account: string;
    Card_CVV2: string;
    Card_Expire: string;
    Amount: string;
    ACH_Routing: string;
    ACH_Account: string;
    ACH_Account_Type: string;
    Name1: string;
    Name2: string;
    ADDR1: string;
    ADDR2: string;
    City: string;
    State: string;
    ZIP: string;
    Email: string;
    Phone: string;
    Do_Rebill: string;
    REB_First_Date: string;
    REB_Expr: string;
    REB_Cycles: string;
    REB_Amount: string;
    Custom_ID: string; // fields have been added post Stingray 6.4.0.35 on MII request
    Custom_ID2: string; 
	Is_Corporate: string;
  end;

  TCC_BluePay_Response = record
    Trans_ID: string;
    Status: string;
    AVS: string;
    CVV2: string;
    Auth_Code: string;
    Msg: string;
    REBID: string;
    Payment_Account_Mask: string;
    Card_Type: string;
    Trans_Type: string;
    RawResponse: string; 
	MasterID : string;
  end;  
  
function ProcessBluePay (const Request: TCC_BluePay_Request; var Response: TCC_BluePay_Response; FSQLConnection: TSQLConnection; SomeCrap: string): Boolean;

implementation

function ProcessBluePay (const Request: TCC_BluePay_Request; var Response: TCC_BluePay_Response; FSQLConnection: TSQLConnection; SomeCrap: string): Boolean;
begin
  Result:=False;
end;

end.