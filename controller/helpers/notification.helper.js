exports.sendSMS=async(phone,user)=>{
    let code=Math.random(10);
    console.log(user);
    console.log(`Sending sms with code ${code} to phone number ${phone}`);
}