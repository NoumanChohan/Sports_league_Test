import axios from "axios";

/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 * 
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM, 
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.  
 * 
 */
class LeagueService {    
     data;
   
    
   
    //  Sets the match schedule.
    //  Match schedule will be given in the following form:
    //   [
    //        {
    //            matchDate: [TIMESTAMP],
    //            stadium: [STRING],
    //            homeTeam: [STRING],
    //           awayTeam: [STRING],
    //            matchPlayed: [BOOLEAN],
    //            homeTeamScore: [INTEGER],
    //            awayTeamScore: [INTEGER]
    //      },
    //        {
    //            matchDate: [TIMESTAMP],
    //           stadium: [STRING],
    //            homeTeam: [STRING],
    //            awayTeam: [STRING],
    //            matchPlayed: [BOOLEAN],
    //           homeTeamScore: [INTEGER],
    //            awayTeamScore: [INTEGER]
    //        }    
    //   ]
      
    //   @param {Array} matches List of matches.
        
    setMatches(matches) {
       this.data=matches
    }

    /**
     * Returns the full list of matches.
     * 
     * @returns {Array} List of matches.
     */
    getMatches() {
     return this.data
    }

    
    //   Returns the leaderboard in a form of a list of JSON objecs.
      
    //   [     
    //        {
    //            teamName: [STRING],
    //            matchesPlayed: [INTEGER],
    //            goalsFor: [INTEGER],
    //           goalsAgainst: [INTEGER],
    //           points: [INTEGER]     
    //       }     
    //  ]       
      
    //   @returns {Array} List of teams representing the leaderboard.
   
    getLeaderboard() {
        let arr=[{
                       teamName:'Brazil' ,
                       matchesPlayed:0,
                       goalsFor: 0,
                      goalsAgainst: 0,
                      points: 0     
                  }  ,
                  {
                    teamName:'Cameroon' ,
                    matchesPlayed:0,
                    goalsFor:0,
                   goalsAgainst: 0,
                   points: 0  
               } ,
               {
                teamName:'Serbia' ,
                matchesPlayed:0,
                goalsFor:0,
               goalsAgainst: 0,
               points: 0    
           } ,
           {
            teamName:'Switzerland' ,
            matchesPlayed:0,
            goalsFor: 0,
           goalsAgainst: 0,
           points: 0    
       }    ]
        this.data.map((val,ind)=>{ 
            if (val.homeTeam==='Brazil' || val.awayTeam==='Brazil') {

             arr[0]['matchesPlayed']=arr[0]["matchesPlayed"]+1


             let checkCountry=val.homeTeam==='Brazil'?1:-1;
            if (checkCountry===1) {
                if (val.homeTeamScore>val.awayTeamScore) {

                    arr[0]["points"]=arr[0]["points"]+3;
                    arr[0]["goalsFor"]=arr[0]["goalsFor"]+val.homeTeamScore;
                    arr[0]["goalsAgainst"]=arr[0]["goalsAgainst"]+val.awayTeamScore;
                 }else if(val.homeTeamScore===val.awayTeamScore){
                    arr[0]["goalsFor"]=arr[0]["goalsFor"]+val.homeTeamScore;
                    arr[0]["goalsAgainst"]=arr[0]["goalsAgainst"]+val.awayTeamScore;
                    arr[0]["points"]=arr[0]["points"]+1;
                 }else{
                    arr[0]["goalsFor"]=arr[0]["goalsFor"]+val.homeTeamScore;
                    arr[0]["goalsAgainst"]=arr[0]["goalsAgainst"]+val.awayTeamScore;
    
                 }
            }else{
                if (val.homeTeamScore<val.awayTeamScore) {

                    arr[0]["points"]=arr[0]["points"]+3;
                    arr[0]["goalsFor"]=arr[0]["goalsFor"]+val.awayTeamScore;
                    arr[0]["goalsAgainst"]=arr[0]["goalsAgainst"]+val.homeTeamScore;
                 }else if(val.homeTeamScore===val.awayTeamScore){
                    arr[0]["goalsFor"]=arr[0]["goalsFor"]+val.awayTeamScore;
                    arr[0]["goalsAgainst"]=arr[0]["goalsAgainst"]+val.homeTeamScore;
                    arr[0]["points"]=arr[0]["points"]+1;
                 }else{
                    arr[0]["goalsFor"]=arr[0]["goalsFor"]+val.awayTeamScore;
                    arr[0]["goalsAgainst"]=arr[0]["goalsAgainst"]+val.homeTeamScore;
    
                 }
            }
             
      
        } 
        
        
        
        if(val.homeTeam==='Cameroon' || val.awayTeam==='Cameroon') {
                arr[1]['matchesPlayed']=arr[1]["matchesPlayed"]+1


             let checkCountry=val.homeTeam==='Cameroon'?1:-1;
            if (checkCountry===1) {
                if (val.homeTeamScore>val.awayTeamScore) {

                    arr[1]["points"]=arr[1]["points"]+3;
                    arr[1]["goalsFor"]=arr[1]["goalsFor"]+val.homeTeamScore;
                    arr[1]["goalsAgainst"]=arr[1]["goalsAgainst"]+val.awayTeamScore;
                 }else if(val.homeTeamScore===val.awayTeamScore){
                    arr[1]["goalsFor"]=arr[1]["goalsFor"]+val.homeTeamScore;
                    arr[1]["goalsAgainst"]=arr[1]["goalsAgainst"]+val.awayTeamScore;
                    arr[1]["points"]=arr[1]["points"]+1;
                 }else{
                    arr[1]["goalsFor"]=arr[1]["goalsFor"]+val.homeTeamScore;
                    arr[1]["goalsAgainst"]=arr[1]["goalsAgainst"]+val.awayTeamScore;

                 }
            }else{
                if (val.homeTeamScore<val.awayTeamScore) {

                    arr[1]["points"]=arr[1]["points"]+3;
                    arr[1]["goalsFor"]=arr[1]["goalsFor"]+val.awayTeamScore;
                    arr[1]["goalsAgainst"]=arr[1]["goalsAgainst"]+val.homeTeamScore;
                 }else if(val.homeTeamScore===val.awayTeamScore){
                    arr[1]["goalsFor"]=arr[1]["goalsFor"]+val.awayTeamScore;
                    arr[1]["goalsAgainst"]=arr[1]["goalsAgainst"]+val.homeTeamScore;
                    arr[1]["points"]=arr[1]["points"]+1;
                 }else{
                    arr[1]["goalsFor"]=arr[1]["goalsFor"]+val.awayTeamScore;
                    arr[1]["goalsAgainst"]=arr[1]["goalsAgainst"]+val.homeTeamScore;
    
                 }
            }

            }



            if(val.homeTeam==='Serbia' || val.awayTeam==='Serbia') {
                arr[2]['matchesPlayed']=arr[2]["matchesPlayed"]+1


             let checkCountry=val.homeTeam==='Serbia'?1:-1;
            if (checkCountry===1) {
                if (val.homeTeamScore>val.awayTeamScore) {

                    arr[2]["points"]=arr[2]["points"]+3;
                    arr[2]["goalsFor"]=arr[2]["goalsFor"]+val.homeTeamScore;
                    arr[2]["goalsAgainst"]=arr[2]["goalsAgainst"]+val.awayTeamScore;
                 }else if(val.homeTeamScore===val.awayTeamScore){
                    arr[2]["goalsFor"]=arr[2]["goalsFor"]+val.homeTeamScore;
                    arr[2]["goalsAgainst"]=arr[2]["goalsAgainst"]+val.awayTeamScore;
                    arr[2]["points"]=arr[2]["points"]+1;
                 }else{
                    arr[2]["goalsFor"]=arr[2]["goalsFor"]+val.homeTeamScore;
                    arr[2]["goalsAgainst"]=arr[2]["goalsAgainst"]+val.awayTeamScore;
    
                 }
            }else{
                if (val.homeTeamScore<val.awayTeamScore) {

                    arr[2]["points"]=arr[2]["points"]+3;
                    arr[2]["goalsFor"]=arr[2]["goalsFor"]+val.awayTeamScore;
                    arr[2]["goalsAgainst"]=arr[2]["goalsAgainst"]+val.homeTeamScore;
                 }else if(val.homeTeamScore===val.awayTeamScore){
                    arr[2]["goalsFor"]=arr[2]["goalsFor"]+val.awayTeamScore;
                    arr[2]["goalsAgainst"]=arr[2]["goalsAgainst"]+val.homeTeamScore;
                    arr[2]["points"]=arr[2]["points"]+1;
                 }else{
                    arr[2]["goalsFor"]=arr[2]["goalsFor"]+val.awayTeamScore;
                    arr[2]["goalsAgainst"]=arr[2]["goalsAgainst"]+val.homeTeamScore;
    
                 }
            }


            }



            if(val.homeTeam==='Switzerland' || val.awayTeam==='Switzerland') {
                arr[3]['matchesPlayed']=arr[3]["matchesPlayed"]+1


                let checkCountry=val.homeTeam==='Switzerland'?1:-1;
               if (checkCountry===1) {
                   if (val.homeTeamScore>val.awayTeamScore) {
   
                       arr[3]["points"]=arr[3]["points"]+3;
                       arr[3]["goalsFor"]=arr[3]["goalsFor"]+val.homeTeamScore;
                       arr[3]["goalsAgainst"]=arr[3]["goalsAgainst"]+val.awayTeamScore;
                    }else if(val.homeTeamScore===val.awayTeamScore){
                       arr[3]["goalsFor"]=arr[3]["goalsFor"]+val.homeTeamScore;
                       arr[3]["goalsAgainst"]=arr[3]["goalsAgainst"]+val.awayTeamScore;
                       arr[3]["points"]=arr[3]["points"]+1;
                    }else{
                       arr[3]["goalsFor"]=arr[3]["goalsFor"]+val.homeTeamScore;
                       arr[3]["goalsAgainst"]=arr[3]["goalsAgainst"]+val.awayTeamScore;
       
                    }
               }else{
                   if (val.homeTeamScore<val.awayTeamScore) {
   
                       arr[3]["points"]=arr[3]["points"]+3;
                       arr[3]["goalsFor"]=arr[3]["goalsFor"]+val.awayTeamScore;
                       arr[3]["goalsAgainst"]=arr[3]["goalsAgainst"]+val.homeTeamScore;
                    }else if(val.homeTeamScore===val.awayTeamScore){
                       arr[3]["goalsFor"]=arr[3]["goalsFor"]+val.awayTeamScore;
                       arr[3]["goalsAgainst"]=arr[3]["goalsAgainst"]+val.homeTeamScore;
                       arr[3]["points"]=arr[3]["points"]+1;
                    }else{
                       arr[3]["goalsFor"]=arr[3]["goalsFor"]+val.awayTeamScore;
                       arr[3]["goalsAgainst"]=arr[3]["goalsAgainst"]+val.homeTeamScore;
       
                    }
               }
            }
        })
        return arr;
        
    }
     
    /**
     * Asynchronic function to fetch the data from the server.
     */
    async fetchData() {
        try {
            const res=await axios.get("http://localhost:3001/api/v1/getAllMatches",{headers:{Authorization:"Bearer YuHBdSlDXY000xa8IlCm7Qgq4_s"}})
            console.log(res.data);
           this.setMatches( res.data.matches   ) 
        } catch (error) {
            
        }
        
    }    
}

export default LeagueService;