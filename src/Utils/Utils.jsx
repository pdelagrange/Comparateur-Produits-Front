import Buffer from "buffer";

export function BufferToUri(buffer){
    const b  = Buffer.Buffer.from(buffer);
    return b.toString();
}