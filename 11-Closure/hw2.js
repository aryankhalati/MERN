function club(clubName) {
    // This is the Closure - it remembers the clubName
    return function playerProfile(playerName, baseValue) {
        
        // String Logic
        let updateName = playerName.toUpperCase();
        
        // Math Logic (Simplified for 1x to 2x multiplier)
        let performance = Math.floor(Math.random() * 2) + 1; 
        let metric = baseValue * performance;
        
        // Return a Template Literal String
        return `${clubName} Report: ${updateName} is now worth ${metric} million euros`;
    };
}

// 1. Initialize the Closure
const scoutEngine = club("Real Madrid");

// 2. Create the Array (Storage)
let scoutLog = [];

// 3. Run the engine and PUSH the result into the array
// This solves your error because we pass the result out
scoutLog.push(scoutEngine("mbappe", 150));
scoutLog.push(scoutEngine("vinicius", 180));

console.log(scoutLog);