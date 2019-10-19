import { DocumentChangeAction, SnapshotOptions } from '@angular/fire/firestore';

export class FirestoreUtil {
  static toArray<T>(
    documentChangeAction: DocumentChangeAction<T>[],
    options?: SnapshotOptions
  ): T[] {
    return documentChangeAction.map(dca => {
      return {
        ...dca.payload.doc.data(options),
        id: dca.payload.doc.id
      };
    });
  }

  static toObject<T>(documentChangeAction: DocumentChangeAction<T>, options?: SnapshotOptions): T {
    return {
      ...documentChangeAction.payload.doc.data(options),
      id: documentChangeAction.payload.doc.id
    };
  }
}
