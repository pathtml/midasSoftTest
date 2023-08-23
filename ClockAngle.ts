function getClockAngle(hh_mm:string):number{
    const h:number = +hh_mm.split(':')[0]
    const m:number = +hh_mm.split(':')[1]

    let hgap:number = (h*5) // 1ชั่วโมงขยับ5ช่อง นับ12เป็นแกน
    let hmgap:number = m/12 // 12นาทีเข็มชั่วโมงขยับ1ช่อง
    const htotalgap:number = hgap+hmgap // ช่องเข็มสั้น
    const degree:number = Math.abs(m-htotalgap)*6 // ช่องระหว่างเข็มสั้นยาว * 1ช่อง6องศา

    return degree > 180 ? 360-degree : degree 
}

console.log(getClockAngle('9:00') === 90)