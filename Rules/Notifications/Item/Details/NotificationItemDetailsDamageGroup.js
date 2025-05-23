import notification from '../../NotificationLibrary';

export default function NotificationItemDetailsDamageGroup(context) {
    try	{
        const codeGroup = context.binding.CodeGroup;
        return notification.NotificationCodeGroupStr(context, 'CatTypeDefects', codeGroup);
    } catch (exception)	{
        return context.localizeText('unknown');
    }
}
