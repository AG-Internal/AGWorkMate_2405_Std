import libSearch from '../OnlineSearchLibrary';

/**
* Display 'Available Offline' status is equipment is already on user's device, no status otherwise
* @param {IClientAPI} context
*/
export default function StatusText(context) {
    return libSearch.isOnlineEntityAvailableOffline(context, 'MyFunctionalLocations', 'FuncLocId') ?
        context.localizeText('available_offline') :
        '';
}
