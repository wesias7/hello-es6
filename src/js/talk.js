class talk {
    constructor(){
        this._sender = arguments[0] ? arguments[0] : '홍길동';
        this._message = arguments[1] ? arguments[1] : '아무런 메시지를 지정하지 않았습니다.';
    }
    set sender(sender){
        this._sender = sender;
    }
    get sender(){
        return this._sender;
    }
    set message(message){
        this._message = message;
    }
    get message(){
        return this._message;
    }
    send(){
        return `${this._sender}님이 말을 하였습니다. (${this._message})`;
    }
}

export default talk;