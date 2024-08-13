/* 2621. Sleep
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value. */

async function sleep(millis: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */