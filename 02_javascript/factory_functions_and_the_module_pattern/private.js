function createUser (name) {
    const discordName = "@" + name;
  
    let reputation = 0; // private var
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, discordName, getReputation, giveReputation };
  }
  
  const josh = createUser("josh");
  josh.giveReputation();
  josh.giveReputation();
  
  console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
  });

  console.log(josh); // does not display private variable "reputation" that's cool
  // logs { discordName: "@josh", reputation: 2 }