import { create } from "domain";
import { model, models, Schema,Document } from "mongoose";

export interface IImage extends Document {
    title: string; // Der Titel des Bildes
    transformationType: string; // Der Typ der Transformation
    publicId: string; // Die öffentliche ID des Bildes
    secureUrl: URL; // Die sichere URL des Bildes
    width?: number; // Die Breite des Bildes (optional)
    height?: number; // Die Höhe des Bildes (optional)
    config?: object; // Konfigurationseinstellungen (optional)
    transformationUrl?: string; // URL für die Transformation (optional)
    aspectRatio?: string; // Das Seitenverhältnis (optional)
    color?: string; // Die Farbe (optional)
    prompt?: string; // Der Prompt (optional)
    author: {
        id: string;
        firstName: string;
        lastName: string;
    }
    createdAt?: Date; // Erstellungsdatum (optional, Standard: jetzt)
    updatedAt?: Date; // Aktualisierungsdatum (optional, Standard: jetzt)
}


const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    secureUrl: { type: URL, required: true },
    width:{ types: Number},
    height:{ types: Number},
    config: { types: Object},
    transformationUrl: { type: URL},
    aspectRatio: { type: String},
    color: { type: String},
    prompt: { type: String},
    author: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;