import {TurboModuleRegistry, TurboModule} from 'react-native';

export interface Spec extends TurboModule {
  launchCamera(options: Object, callback: () => void): void;
  launchImageLibrary(options: Object, callback: () => void): void;
}
export default TurboModuleRegistry.get<Spec>('ImagePicker');
