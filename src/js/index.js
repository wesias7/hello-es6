import talk from './talk';

{
    let req = {
        body : {
            sender : '천영진',
            message : '안녕하세요!'
        }
    };
    console.log(req);
    let Talk = new talk(req.body.sender, req.body.message);
    console.log(Talk.send());
}