

export default class Utils {
    static this: any;

    static getDateAnnoMese(data: string) {
        var date = new Date(data);
        var month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)

        return date.getFullYear() + "-" + month;
    }

    static getDateComplete(data: string) {
        var date = new Date(data);
        var month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
        return date.getFullYear() + "-" + month + "-" + day;
    }

    
}