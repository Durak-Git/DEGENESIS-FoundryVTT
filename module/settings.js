// Degenesis System Settings Module
// Used for registering game system settings

const system = "degenesis"

export const DegenesisSystemSettings = () => 
{

    // Automatic encumbrance calculation switch

     game.settings.register(system, "AutomateEncumbrancePenalty", {
        name: "DGNS.SettingsEncumbrancePenalty",
        hint: "DGNS.SettingsEncumbrancePenaltyHelper",
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
      });  

      game.settings.register(system, "MinimumOneAN",
      {
        name: "DGNS.SettingsMinimumOneAN",
        hint: "DGNS.SettingsMinimumOneANHelper",
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
      });




      console.log(`%cDEGENESIS` + `%c | Settings registered`, "color: #ed1d27", "color: unset");
}

 export const AutomateEncumbrancePenalty = () => {
    return game.settings.get(system, "AutomateEncumbrancePenalty");
  }; 

 export const MinimumOneAN = () => {
  return game.settings.get(system, "MinimumOneAN");
}; 