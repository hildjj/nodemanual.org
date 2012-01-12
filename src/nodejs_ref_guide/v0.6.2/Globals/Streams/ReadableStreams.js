
/** section: Streams
  * class ReadableStream
  *
  *
 **/

/**
 * ReadableStream@close()
 * 
 * Emitted when the underlying file descriptor has been closed. Not all streams emit this.  For example, an incoming HTTP request don't emit `close`.
 * 
**/ 


/**
 * ReadableStream@data(data)
 * - data (buffer | String):  The data being emitted
 * 
 * The `data` event emits either a `Buffer` (by default) or a string if `setEncoding()` was previously used on the stream.
 * 
**/ 


/**
 * ReadableStream@end()
 *
 * Emitted when the stream has received an EOF (FIN in TCP terminology). Indicates that no more `data` events will happen. If the stream is also writable, it may be possible to continue writing.
 * 
**/ 


/**
 * ReadableStream@error()
 *
 * Emitted if there was an error receiving data.
**/ 


/**
 * ReadableStream@pipe(src)
 * - src (streams.ReadableStream): The readable stream
 *
 * Emitted when the stream is passed to a readable stream's pipe method.
 *
**/ 


/**
 * ReadableStream.destroy() -> Void
 *
 * Closes the underlying file descriptor. The stream will not emit any more events.
**/ 


/**
 * ReadableStream.destroySoon()-> Voi
 *
 * After the write queue is drained, close the file descriptor.
 * 
**/ 


/**
 * ReadableStream.pause()-> Voi
 *
 * Pause any incoming `'data'` events.
 * 
**/


/**
 * ReadableStream.pipe(destination [, options]) -> stream
 * - destination (streams.WritableStream):  The WriteStream to connect to
 * - options (Object):  Any optional commands to send
 * 
 * This is the `Stream.prototype()` method available on all `Stream` objects. It connects this read stream to a `destination`. Incoming data on this stream is then written to `destination`. The destination and source streams are kept in sync by Node.js pausing and resuming as necessary.
 * 
 * This function returns the `destination` stream.
 * 
 * By default, `end()` is called on the destination when the source stream emits `end`, so that `destination` is no longer writable. Pass `{ end: false }` into `options` to keep the destination stream open.
 * 
 * #### Example 
 * 
 * Emulating the Unix `cat` command:
 * 
 *     process.stdin.resume(); // process.stdin is paused by default, so we need to start it up
 *     process.stdin.pipe(process.stdout); // type something into the console & watch it repeat
 * 
 * This keeps `process.stdout` open so that "Goodbye" can be written at the end.
 * 
 *     process.stdin.resume();
 * 
 *     process.stdin.pipe(process.stdout, { end: false });
 * 
 *     process.stdin.on("end", function() {
 *       process.stdout.write("Goodbye\n");
 *     });
 *
 *  
**/ 

/** related to: ReadableStream.data
 * ReadableStream.setEncoding(encoding)
 * - encoding (String): The encoding to use; this can be `'utf8'`, `'ascii'`, or `'base64'`.
 * 
 * Makes the `data` event emit a string instead of a `Buffer`.
 * 
**/ 


/**
 * ReadableStream.resume() -> Void
 *
 * Resumes the incoming `'data'` events after a `pause()`. 
 *
**/ 

