class Mobile{
	mobileId: number;
    mobileName:string;
	mobileCost: number;
    constructor(id:number, name:string, cost:number){
        this.mobileId=id;
		this.mobileName= name;
		this.mobileCost=cost;
    } 
}

class BasicPhone extends Mobile{
    mobileType : string;
    constructor(id:number, name:string, cost: number, mobileType:string){
        super(id, name, cost);
        this.mobileType=mobileType;
    }
}

class SmartPhone extends Mobile{
    mobileType : string;
    constructor(id:number, name:string, cost: number, mobileType:string){
        super(id, name, cost);
        this.mobileType=mobileType;
    }
}

class Test{
	displayDetails(){
		let mobObj1 = new BasicPhone(1600, "Samsung Guru", 1200, "Keypad");
		let mobObj2 = new SmartPhone(1220, "Samsung Galaxy S10", 70000, "Smartphone");
		console.log("Mobile 1 Details: ");
		console.log("Mobile id: "+mobObj1.mobileId);
		console.log("Mobile name: "+mobObj1.mobileName);
		console.log("Mobile Cost: "+mobObj1.mobileCost);
		console.log("Mobile Type: "+mobObj1.mobileType);
		
		console.log("\nMobile 2 Details: ");
		console.log("Mobile id: "+mobObj2.mobileId);
		console.log("Mobile name: "+mobObj2.mobileName);
		console.log("Mobile Cost: "+mobObj2.mobileCost);
		console.log("Mobile Type: "+mobObj2.mobileType);
    }

}
let testObj = new Test();
testObj.displayDetails();
