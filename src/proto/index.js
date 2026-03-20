/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const api = $root.api = (() => {

    /**
     * Namespace api.
     * @exports api
     * @namespace
     */
    const api = {};

    api.PostResponse = (function() {

        /**
         * Properties of a PostResponse.
         * @memberof api
         * @interface IPostResponse
         * @property {number|null} [id] PostResponse id
         */

        /**
         * Constructs a new PostResponse.
         * @memberof api
         * @classdesc Represents a PostResponse.
         * @implements IPostResponse
         * @constructor
         * @param {api.IPostResponse=} [properties] Properties to set
         */
        function PostResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PostResponse id.
         * @member {number} id
         * @memberof api.PostResponse
         * @instance
         */
        PostResponse.prototype.id = 0;

        /**
         * Creates a new PostResponse instance using the specified properties.
         * @function create
         * @memberof api.PostResponse
         * @static
         * @param {api.IPostResponse=} [properties] Properties to set
         * @returns {api.PostResponse} PostResponse instance
         */
        PostResponse.create = function create(properties) {
            return new PostResponse(properties);
        };

        /**
         * Encodes the specified PostResponse message. Does not implicitly {@link api.PostResponse.verify|verify} messages.
         * @function encode
         * @memberof api.PostResponse
         * @static
         * @param {api.IPostResponse} message PostResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified PostResponse message, length delimited. Does not implicitly {@link api.PostResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.PostResponse
         * @static
         * @param {api.IPostResponse} message PostResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PostResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.PostResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.PostResponse} PostResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.PostResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PostResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.PostResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.PostResponse} PostResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PostResponse message.
         * @function verify
         * @memberof api.PostResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PostResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a PostResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.PostResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.PostResponse} PostResponse
         */
        PostResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.PostResponse)
                return object;
            let message = new $root.api.PostResponse();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a PostResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.PostResponse
         * @static
         * @param {api.PostResponse} message PostResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PostResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this PostResponse to JSON.
         * @function toJSON
         * @memberof api.PostResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PostResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PostResponse
         * @function getTypeUrl
         * @memberof api.PostResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PostResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.PostResponse";
        };

        return PostResponse;
    })();

    api.PutResponse = (function() {

        /**
         * Properties of a PutResponse.
         * @memberof api
         * @interface IPutResponse
         * @property {boolean|null} [success] PutResponse success
         */

        /**
         * Constructs a new PutResponse.
         * @memberof api
         * @classdesc Represents a PutResponse.
         * @implements IPutResponse
         * @constructor
         * @param {api.IPutResponse=} [properties] Properties to set
         */
        function PutResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PutResponse success.
         * @member {boolean} success
         * @memberof api.PutResponse
         * @instance
         */
        PutResponse.prototype.success = false;

        /**
         * Creates a new PutResponse instance using the specified properties.
         * @function create
         * @memberof api.PutResponse
         * @static
         * @param {api.IPutResponse=} [properties] Properties to set
         * @returns {api.PutResponse} PutResponse instance
         */
        PutResponse.create = function create(properties) {
            return new PutResponse(properties);
        };

        /**
         * Encodes the specified PutResponse message. Does not implicitly {@link api.PutResponse.verify|verify} messages.
         * @function encode
         * @memberof api.PutResponse
         * @static
         * @param {api.IPutResponse} message PutResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PutResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };

        /**
         * Encodes the specified PutResponse message, length delimited. Does not implicitly {@link api.PutResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.PutResponse
         * @static
         * @param {api.IPutResponse} message PutResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PutResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PutResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.PutResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.PutResponse} PutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PutResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.PutResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PutResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.PutResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.PutResponse} PutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PutResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PutResponse message.
         * @function verify
         * @memberof api.PutResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PutResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates a PutResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.PutResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.PutResponse} PutResponse
         */
        PutResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.PutResponse)
                return object;
            let message = new $root.api.PutResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from a PutResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.PutResponse
         * @static
         * @param {api.PutResponse} message PutResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PutResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        /**
         * Converts this PutResponse to JSON.
         * @function toJSON
         * @memberof api.PutResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PutResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PutResponse
         * @function getTypeUrl
         * @memberof api.PutResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PutResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.PutResponse";
        };

        return PutResponse;
    })();

    return api;
})();

export const auth = $root.auth = (() => {

    /**
     * Namespace auth.
     * @exports auth
     * @namespace
     */
    const auth = {};

    auth.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof auth
         * @interface ILoginRequest
         * @property {string|null} [email] LoginRequest email
         * @property {string|null} [password] LoginRequest password
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof auth
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {auth.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest email.
         * @member {string} email
         * @memberof auth.LoginRequest
         * @instance
         */
        LoginRequest.prototype.email = "";

        /**
         * LoginRequest password.
         * @member {string} password
         * @memberof auth.LoginRequest
         * @instance
         */
        LoginRequest.prototype.password = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof auth.LoginRequest
         * @static
         * @param {auth.ILoginRequest=} [properties] Properties to set
         * @returns {auth.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link auth.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof auth.LoginRequest
         * @static
         * @param {auth.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link auth.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.LoginRequest
         * @static
         * @param {auth.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof auth.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.LoginRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.email = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof auth.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.LoginRequest)
                return object;
            let message = new $root.auth.LoginRequest();
            if (object.email != null)
                message.email = String(object.email);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.LoginRequest
         * @static
         * @param {auth.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.email = "";
                object.password = "";
            }
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof auth.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginRequest
         * @function getTypeUrl
         * @memberof auth.LoginRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.LoginRequest";
        };

        return LoginRequest;
    })();

    auth.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof auth
         * @interface ILoginResponse
         * @property {boolean|null} [success] LoginResponse success
         * @property {string|null} [message] LoginResponse message
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof auth
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {auth.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse success.
         * @member {boolean} success
         * @memberof auth.LoginResponse
         * @instance
         */
        LoginResponse.prototype.success = false;

        /**
         * LoginResponse message.
         * @member {string} message
         * @memberof auth.LoginResponse
         * @instance
         */
        LoginResponse.prototype.message = "";

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof auth.LoginResponse
         * @static
         * @param {auth.ILoginResponse=} [properties] Properties to set
         * @returns {auth.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link auth.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof auth.LoginResponse
         * @static
         * @param {auth.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link auth.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.LoginResponse
         * @static
         * @param {auth.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof auth.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.LoginResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof auth.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.LoginResponse)
                return object;
            let message = new $root.auth.LoginResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.LoginResponse
         * @static
         * @param {auth.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof auth.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginResponse
         * @function getTypeUrl
         * @memberof auth.LoginResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.LoginResponse";
        };

        return LoginResponse;
    })();

    return auth;
})();

export const category = $root.category = (() => {

    /**
     * Namespace category.
     * @exports category
     * @namespace
     */
    const category = {};

    category.category = (function() {

        /**
         * Properties of a category.
         * @memberof category
         * @interface Icategory
         * @property {number|null} [id] category id
         * @property {string|null} [category] category category
         * @property {Array.<string>|null} [value] category value
         */

        /**
         * Constructs a new category.
         * @memberof category
         * @classdesc Represents a category.
         * @implements Icategory
         * @constructor
         * @param {category.Icategory=} [properties] Properties to set
         */
        function category(properties) {
            this.value = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * category id.
         * @member {number} id
         * @memberof category.category
         * @instance
         */
        category.prototype.id = 0;

        /**
         * category category.
         * @member {string} category
         * @memberof category.category
         * @instance
         */
        category.prototype.category = "";

        /**
         * category value.
         * @member {Array.<string>} value
         * @memberof category.category
         * @instance
         */
        category.prototype.value = $util.emptyArray;

        /**
         * Creates a new category instance using the specified properties.
         * @function create
         * @memberof category.category
         * @static
         * @param {category.Icategory=} [properties] Properties to set
         * @returns {category.category} category instance
         */
        category.create = function create(properties) {
            return new category(properties);
        };

        /**
         * Encodes the specified category message. Does not implicitly {@link category.category.verify|verify} messages.
         * @function encode
         * @memberof category.category
         * @static
         * @param {category.Icategory} message category message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        category.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.category);
            if (message.value != null && message.value.length)
                for (let i = 0; i < message.value.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.value[i]);
            return writer;
        };

        /**
         * Encodes the specified category message, length delimited. Does not implicitly {@link category.category.verify|verify} messages.
         * @function encodeDelimited
         * @memberof category.category
         * @static
         * @param {category.Icategory} message category message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        category.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a category message from the specified reader or buffer.
         * @function decode
         * @memberof category.category
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {category.category} category
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        category.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.category.category();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.category = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a category message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof category.category
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {category.category} category
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        category.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a category message.
         * @function verify
         * @memberof category.category
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        category.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.category != null && message.hasOwnProperty("category"))
                if (!$util.isString(message.category))
                    return "category: string expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!Array.isArray(message.value))
                    return "value: array expected";
                for (let i = 0; i < message.value.length; ++i)
                    if (!$util.isString(message.value[i]))
                        return "value: string[] expected";
            }
            return null;
        };

        /**
         * Creates a category message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof category.category
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {category.category} category
         */
        category.fromObject = function fromObject(object) {
            if (object instanceof $root.category.category)
                return object;
            let message = new $root.category.category();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.category != null)
                message.category = String(object.category);
            if (object.value) {
                if (!Array.isArray(object.value))
                    throw TypeError(".category.category.value: array expected");
                message.value = [];
                for (let i = 0; i < object.value.length; ++i)
                    message.value[i] = String(object.value[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a category message. Also converts values to other types if specified.
         * @function toObject
         * @memberof category.category
         * @static
         * @param {category.category} message category
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        category.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.value = [];
            if (options.defaults) {
                object.id = 0;
                object.category = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = message.category;
            if (message.value && message.value.length) {
                object.value = [];
                for (let j = 0; j < message.value.length; ++j)
                    object.value[j] = message.value[j];
            }
            return object;
        };

        /**
         * Converts this category to JSON.
         * @function toJSON
         * @memberof category.category
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        category.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for category
         * @function getTypeUrl
         * @memberof category.category
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        category.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/category.category";
        };

        return category;
    })();

    category.CategoryGetResponse = (function() {

        /**
         * Properties of a CategoryGetResponse.
         * @memberof category
         * @interface ICategoryGetResponse
         * @property {Array.<category.Icategory>|null} [categories] CategoryGetResponse categories
         */

        /**
         * Constructs a new CategoryGetResponse.
         * @memberof category
         * @classdesc Represents a CategoryGetResponse.
         * @implements ICategoryGetResponse
         * @constructor
         * @param {category.ICategoryGetResponse=} [properties] Properties to set
         */
        function CategoryGetResponse(properties) {
            this.categories = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CategoryGetResponse categories.
         * @member {Array.<category.Icategory>} categories
         * @memberof category.CategoryGetResponse
         * @instance
         */
        CategoryGetResponse.prototype.categories = $util.emptyArray;

        /**
         * Creates a new CategoryGetResponse instance using the specified properties.
         * @function create
         * @memberof category.CategoryGetResponse
         * @static
         * @param {category.ICategoryGetResponse=} [properties] Properties to set
         * @returns {category.CategoryGetResponse} CategoryGetResponse instance
         */
        CategoryGetResponse.create = function create(properties) {
            return new CategoryGetResponse(properties);
        };

        /**
         * Encodes the specified CategoryGetResponse message. Does not implicitly {@link category.CategoryGetResponse.verify|verify} messages.
         * @function encode
         * @memberof category.CategoryGetResponse
         * @static
         * @param {category.ICategoryGetResponse} message CategoryGetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CategoryGetResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.categories != null && message.categories.length)
                for (let i = 0; i < message.categories.length; ++i)
                    $root.category.category.encode(message.categories[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CategoryGetResponse message, length delimited. Does not implicitly {@link category.CategoryGetResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof category.CategoryGetResponse
         * @static
         * @param {category.ICategoryGetResponse} message CategoryGetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CategoryGetResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CategoryGetResponse message from the specified reader or buffer.
         * @function decode
         * @memberof category.CategoryGetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {category.CategoryGetResponse} CategoryGetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CategoryGetResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.category.CategoryGetResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.categories && message.categories.length))
                            message.categories = [];
                        message.categories.push($root.category.category.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CategoryGetResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof category.CategoryGetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {category.CategoryGetResponse} CategoryGetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CategoryGetResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CategoryGetResponse message.
         * @function verify
         * @memberof category.CategoryGetResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CategoryGetResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.categories != null && message.hasOwnProperty("categories")) {
                if (!Array.isArray(message.categories))
                    return "categories: array expected";
                for (let i = 0; i < message.categories.length; ++i) {
                    let error = $root.category.category.verify(message.categories[i]);
                    if (error)
                        return "categories." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CategoryGetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof category.CategoryGetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {category.CategoryGetResponse} CategoryGetResponse
         */
        CategoryGetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.category.CategoryGetResponse)
                return object;
            let message = new $root.category.CategoryGetResponse();
            if (object.categories) {
                if (!Array.isArray(object.categories))
                    throw TypeError(".category.CategoryGetResponse.categories: array expected");
                message.categories = [];
                for (let i = 0; i < object.categories.length; ++i) {
                    if (typeof object.categories[i] !== "object")
                        throw TypeError(".category.CategoryGetResponse.categories: object expected");
                    message.categories[i] = $root.category.category.fromObject(object.categories[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CategoryGetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof category.CategoryGetResponse
         * @static
         * @param {category.CategoryGetResponse} message CategoryGetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CategoryGetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.categories = [];
            if (message.categories && message.categories.length) {
                object.categories = [];
                for (let j = 0; j < message.categories.length; ++j)
                    object.categories[j] = $root.category.category.toObject(message.categories[j], options);
            }
            return object;
        };

        /**
         * Converts this CategoryGetResponse to JSON.
         * @function toJSON
         * @memberof category.CategoryGetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CategoryGetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CategoryGetResponse
         * @function getTypeUrl
         * @memberof category.CategoryGetResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CategoryGetResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/category.CategoryGetResponse";
        };

        return CategoryGetResponse;
    })();

    category.AddCategoryRequest = (function() {

        /**
         * Properties of an AddCategoryRequest.
         * @memberof category
         * @interface IAddCategoryRequest
         * @property {string|null} [category] AddCategoryRequest category
         * @property {Array.<string>|null} [value] AddCategoryRequest value
         */

        /**
         * Constructs a new AddCategoryRequest.
         * @memberof category
         * @classdesc Represents an AddCategoryRequest.
         * @implements IAddCategoryRequest
         * @constructor
         * @param {category.IAddCategoryRequest=} [properties] Properties to set
         */
        function AddCategoryRequest(properties) {
            this.value = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddCategoryRequest category.
         * @member {string} category
         * @memberof category.AddCategoryRequest
         * @instance
         */
        AddCategoryRequest.prototype.category = "";

        /**
         * AddCategoryRequest value.
         * @member {Array.<string>} value
         * @memberof category.AddCategoryRequest
         * @instance
         */
        AddCategoryRequest.prototype.value = $util.emptyArray;

        /**
         * Creates a new AddCategoryRequest instance using the specified properties.
         * @function create
         * @memberof category.AddCategoryRequest
         * @static
         * @param {category.IAddCategoryRequest=} [properties] Properties to set
         * @returns {category.AddCategoryRequest} AddCategoryRequest instance
         */
        AddCategoryRequest.create = function create(properties) {
            return new AddCategoryRequest(properties);
        };

        /**
         * Encodes the specified AddCategoryRequest message. Does not implicitly {@link category.AddCategoryRequest.verify|verify} messages.
         * @function encode
         * @memberof category.AddCategoryRequest
         * @static
         * @param {category.IAddCategoryRequest} message AddCategoryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddCategoryRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.category);
            if (message.value != null && message.value.length)
                for (let i = 0; i < message.value.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value[i]);
            return writer;
        };

        /**
         * Encodes the specified AddCategoryRequest message, length delimited. Does not implicitly {@link category.AddCategoryRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof category.AddCategoryRequest
         * @static
         * @param {category.IAddCategoryRequest} message AddCategoryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddCategoryRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddCategoryRequest message from the specified reader or buffer.
         * @function decode
         * @memberof category.AddCategoryRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {category.AddCategoryRequest} AddCategoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddCategoryRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.category.AddCategoryRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.category = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddCategoryRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof category.AddCategoryRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {category.AddCategoryRequest} AddCategoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddCategoryRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddCategoryRequest message.
         * @function verify
         * @memberof category.AddCategoryRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddCategoryRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.category != null && message.hasOwnProperty("category"))
                if (!$util.isString(message.category))
                    return "category: string expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!Array.isArray(message.value))
                    return "value: array expected";
                for (let i = 0; i < message.value.length; ++i)
                    if (!$util.isString(message.value[i]))
                        return "value: string[] expected";
            }
            return null;
        };

        /**
         * Creates an AddCategoryRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof category.AddCategoryRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {category.AddCategoryRequest} AddCategoryRequest
         */
        AddCategoryRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.category.AddCategoryRequest)
                return object;
            let message = new $root.category.AddCategoryRequest();
            if (object.category != null)
                message.category = String(object.category);
            if (object.value) {
                if (!Array.isArray(object.value))
                    throw TypeError(".category.AddCategoryRequest.value: array expected");
                message.value = [];
                for (let i = 0; i < object.value.length; ++i)
                    message.value[i] = String(object.value[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an AddCategoryRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof category.AddCategoryRequest
         * @static
         * @param {category.AddCategoryRequest} message AddCategoryRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddCategoryRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.value = [];
            if (options.defaults)
                object.category = "";
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = message.category;
            if (message.value && message.value.length) {
                object.value = [];
                for (let j = 0; j < message.value.length; ++j)
                    object.value[j] = message.value[j];
            }
            return object;
        };

        /**
         * Converts this AddCategoryRequest to JSON.
         * @function toJSON
         * @memberof category.AddCategoryRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddCategoryRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddCategoryRequest
         * @function getTypeUrl
         * @memberof category.AddCategoryRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddCategoryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/category.AddCategoryRequest";
        };

        return AddCategoryRequest;
    })();

    category.AddCategoryResponse = (function() {

        /**
         * Properties of an AddCategoryResponse.
         * @memberof category
         * @interface IAddCategoryResponse
         * @property {number|null} [id] AddCategoryResponse id
         */

        /**
         * Constructs a new AddCategoryResponse.
         * @memberof category
         * @classdesc Represents an AddCategoryResponse.
         * @implements IAddCategoryResponse
         * @constructor
         * @param {category.IAddCategoryResponse=} [properties] Properties to set
         */
        function AddCategoryResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddCategoryResponse id.
         * @member {number} id
         * @memberof category.AddCategoryResponse
         * @instance
         */
        AddCategoryResponse.prototype.id = 0;

        /**
         * Creates a new AddCategoryResponse instance using the specified properties.
         * @function create
         * @memberof category.AddCategoryResponse
         * @static
         * @param {category.IAddCategoryResponse=} [properties] Properties to set
         * @returns {category.AddCategoryResponse} AddCategoryResponse instance
         */
        AddCategoryResponse.create = function create(properties) {
            return new AddCategoryResponse(properties);
        };

        /**
         * Encodes the specified AddCategoryResponse message. Does not implicitly {@link category.AddCategoryResponse.verify|verify} messages.
         * @function encode
         * @memberof category.AddCategoryResponse
         * @static
         * @param {category.IAddCategoryResponse} message AddCategoryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddCategoryResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified AddCategoryResponse message, length delimited. Does not implicitly {@link category.AddCategoryResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof category.AddCategoryResponse
         * @static
         * @param {category.IAddCategoryResponse} message AddCategoryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddCategoryResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddCategoryResponse message from the specified reader or buffer.
         * @function decode
         * @memberof category.AddCategoryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {category.AddCategoryResponse} AddCategoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddCategoryResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.category.AddCategoryResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddCategoryResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof category.AddCategoryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {category.AddCategoryResponse} AddCategoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddCategoryResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddCategoryResponse message.
         * @function verify
         * @memberof category.AddCategoryResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddCategoryResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates an AddCategoryResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof category.AddCategoryResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {category.AddCategoryResponse} AddCategoryResponse
         */
        AddCategoryResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.category.AddCategoryResponse)
                return object;
            let message = new $root.category.AddCategoryResponse();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from an AddCategoryResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof category.AddCategoryResponse
         * @static
         * @param {category.AddCategoryResponse} message AddCategoryResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddCategoryResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this AddCategoryResponse to JSON.
         * @function toJSON
         * @memberof category.AddCategoryResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddCategoryResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddCategoryResponse
         * @function getTypeUrl
         * @memberof category.AddCategoryResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddCategoryResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/category.AddCategoryResponse";
        };

        return AddCategoryResponse;
    })();

    category.AddCategoryValueRequest = (function() {

        /**
         * Properties of an AddCategoryValueRequest.
         * @memberof category
         * @interface IAddCategoryValueRequest
         * @property {number|null} [id] AddCategoryValueRequest id
         * @property {string|null} [value] AddCategoryValueRequest value
         */

        /**
         * Constructs a new AddCategoryValueRequest.
         * @memberof category
         * @classdesc Represents an AddCategoryValueRequest.
         * @implements IAddCategoryValueRequest
         * @constructor
         * @param {category.IAddCategoryValueRequest=} [properties] Properties to set
         */
        function AddCategoryValueRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddCategoryValueRequest id.
         * @member {number} id
         * @memberof category.AddCategoryValueRequest
         * @instance
         */
        AddCategoryValueRequest.prototype.id = 0;

        /**
         * AddCategoryValueRequest value.
         * @member {string} value
         * @memberof category.AddCategoryValueRequest
         * @instance
         */
        AddCategoryValueRequest.prototype.value = "";

        /**
         * Creates a new AddCategoryValueRequest instance using the specified properties.
         * @function create
         * @memberof category.AddCategoryValueRequest
         * @static
         * @param {category.IAddCategoryValueRequest=} [properties] Properties to set
         * @returns {category.AddCategoryValueRequest} AddCategoryValueRequest instance
         */
        AddCategoryValueRequest.create = function create(properties) {
            return new AddCategoryValueRequest(properties);
        };

        /**
         * Encodes the specified AddCategoryValueRequest message. Does not implicitly {@link category.AddCategoryValueRequest.verify|verify} messages.
         * @function encode
         * @memberof category.AddCategoryValueRequest
         * @static
         * @param {category.IAddCategoryValueRequest} message AddCategoryValueRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddCategoryValueRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified AddCategoryValueRequest message, length delimited. Does not implicitly {@link category.AddCategoryValueRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof category.AddCategoryValueRequest
         * @static
         * @param {category.IAddCategoryValueRequest} message AddCategoryValueRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddCategoryValueRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddCategoryValueRequest message from the specified reader or buffer.
         * @function decode
         * @memberof category.AddCategoryValueRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {category.AddCategoryValueRequest} AddCategoryValueRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddCategoryValueRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.category.AddCategoryValueRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.value = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddCategoryValueRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof category.AddCategoryValueRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {category.AddCategoryValueRequest} AddCategoryValueRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddCategoryValueRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddCategoryValueRequest message.
         * @function verify
         * @memberof category.AddCategoryValueRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddCategoryValueRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates an AddCategoryValueRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof category.AddCategoryValueRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {category.AddCategoryValueRequest} AddCategoryValueRequest
         */
        AddCategoryValueRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.category.AddCategoryValueRequest)
                return object;
            let message = new $root.category.AddCategoryValueRequest();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from an AddCategoryValueRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof category.AddCategoryValueRequest
         * @static
         * @param {category.AddCategoryValueRequest} message AddCategoryValueRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddCategoryValueRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.value = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this AddCategoryValueRequest to JSON.
         * @function toJSON
         * @memberof category.AddCategoryValueRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddCategoryValueRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddCategoryValueRequest
         * @function getTypeUrl
         * @memberof category.AddCategoryValueRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddCategoryValueRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/category.AddCategoryValueRequest";
        };

        return AddCategoryValueRequest;
    })();

    category.UpdateResponse = (function() {

        /**
         * Properties of an UpdateResponse.
         * @memberof category
         * @interface IUpdateResponse
         * @property {boolean|null} [success] UpdateResponse success
         */

        /**
         * Constructs a new UpdateResponse.
         * @memberof category
         * @classdesc Represents an UpdateResponse.
         * @implements IUpdateResponse
         * @constructor
         * @param {category.IUpdateResponse=} [properties] Properties to set
         */
        function UpdateResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateResponse success.
         * @member {boolean} success
         * @memberof category.UpdateResponse
         * @instance
         */
        UpdateResponse.prototype.success = false;

        /**
         * Creates a new UpdateResponse instance using the specified properties.
         * @function create
         * @memberof category.UpdateResponse
         * @static
         * @param {category.IUpdateResponse=} [properties] Properties to set
         * @returns {category.UpdateResponse} UpdateResponse instance
         */
        UpdateResponse.create = function create(properties) {
            return new UpdateResponse(properties);
        };

        /**
         * Encodes the specified UpdateResponse message. Does not implicitly {@link category.UpdateResponse.verify|verify} messages.
         * @function encode
         * @memberof category.UpdateResponse
         * @static
         * @param {category.IUpdateResponse} message UpdateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };

        /**
         * Encodes the specified UpdateResponse message, length delimited. Does not implicitly {@link category.UpdateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof category.UpdateResponse
         * @static
         * @param {category.IUpdateResponse} message UpdateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof category.UpdateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {category.UpdateResponse} UpdateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.category.UpdateResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof category.UpdateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {category.UpdateResponse} UpdateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateResponse message.
         * @function verify
         * @memberof category.UpdateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates an UpdateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof category.UpdateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {category.UpdateResponse} UpdateResponse
         */
        UpdateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.category.UpdateResponse)
                return object;
            let message = new $root.category.UpdateResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from an UpdateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof category.UpdateResponse
         * @static
         * @param {category.UpdateResponse} message UpdateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        /**
         * Converts this UpdateResponse to JSON.
         * @function toJSON
         * @memberof category.UpdateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateResponse
         * @function getTypeUrl
         * @memberof category.UpdateResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/category.UpdateResponse";
        };

        return UpdateResponse;
    })();

    return category;
})();

export const line = $root.line = (() => {

    /**
     * Namespace line.
     * @exports line
     * @namespace
     */
    const line = {};

    line.Line = (function() {

        /**
         * Properties of a Line.
         * @memberof line
         * @interface ILine
         * @property {number|null} [id] Line id
         * @property {string|null} [lineCode] Line lineCode
         * @property {string|null} [lineName] Line lineName
         * @property {string|null} [area] Line area
         * @property {string|null} [district] Line district
         * @property {number|Long|null} [lineValue] Line lineValue
         * @property {number|Long|null} [actualValue] Line actualValue
         * @property {number|Long|null} [paid] Line paid
         * @property {number|Long|null} [lineDebt] Line lineDebt
         * @property {number|Long|null} [lineRevenue] Line lineRevenue
         * @property {number|Long|null} [lineProfit] Line lineProfit
         */

        /**
         * Constructs a new Line.
         * @memberof line
         * @classdesc Represents a Line.
         * @implements ILine
         * @constructor
         * @param {line.ILine=} [properties] Properties to set
         */
        function Line(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Line id.
         * @member {number} id
         * @memberof line.Line
         * @instance
         */
        Line.prototype.id = 0;

        /**
         * Line lineCode.
         * @member {string} lineCode
         * @memberof line.Line
         * @instance
         */
        Line.prototype.lineCode = "";

        /**
         * Line lineName.
         * @member {string} lineName
         * @memberof line.Line
         * @instance
         */
        Line.prototype.lineName = "";

        /**
         * Line area.
         * @member {string} area
         * @memberof line.Line
         * @instance
         */
        Line.prototype.area = "";

        /**
         * Line district.
         * @member {string} district
         * @memberof line.Line
         * @instance
         */
        Line.prototype.district = "";

        /**
         * Line lineValue.
         * @member {number|Long} lineValue
         * @memberof line.Line
         * @instance
         */
        Line.prototype.lineValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Line actualValue.
         * @member {number|Long} actualValue
         * @memberof line.Line
         * @instance
         */
        Line.prototype.actualValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Line paid.
         * @member {number|Long} paid
         * @memberof line.Line
         * @instance
         */
        Line.prototype.paid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Line lineDebt.
         * @member {number|Long} lineDebt
         * @memberof line.Line
         * @instance
         */
        Line.prototype.lineDebt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Line lineRevenue.
         * @member {number|Long} lineRevenue
         * @memberof line.Line
         * @instance
         */
        Line.prototype.lineRevenue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Line lineProfit.
         * @member {number|Long} lineProfit
         * @memberof line.Line
         * @instance
         */
        Line.prototype.lineProfit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Line instance using the specified properties.
         * @function create
         * @memberof line.Line
         * @static
         * @param {line.ILine=} [properties] Properties to set
         * @returns {line.Line} Line instance
         */
        Line.create = function create(properties) {
            return new Line(properties);
        };

        /**
         * Encodes the specified Line message. Does not implicitly {@link line.Line.verify|verify} messages.
         * @function encode
         * @memberof line.Line
         * @static
         * @param {line.ILine} message Line message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Line.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.lineCode != null && Object.hasOwnProperty.call(message, "lineCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lineCode);
            if (message.lineName != null && Object.hasOwnProperty.call(message, "lineName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.lineName);
            if (message.area != null && Object.hasOwnProperty.call(message, "area"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.area);
            if (message.district != null && Object.hasOwnProperty.call(message, "district"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.district);
            if (message.lineValue != null && Object.hasOwnProperty.call(message, "lineValue"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.lineValue);
            if (message.actualValue != null && Object.hasOwnProperty.call(message, "actualValue"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.actualValue);
            if (message.paid != null && Object.hasOwnProperty.call(message, "paid"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.paid);
            if (message.lineDebt != null && Object.hasOwnProperty.call(message, "lineDebt"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.lineDebt);
            if (message.lineRevenue != null && Object.hasOwnProperty.call(message, "lineRevenue"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.lineRevenue);
            if (message.lineProfit != null && Object.hasOwnProperty.call(message, "lineProfit"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.lineProfit);
            return writer;
        };

        /**
         * Encodes the specified Line message, length delimited. Does not implicitly {@link line.Line.verify|verify} messages.
         * @function encodeDelimited
         * @memberof line.Line
         * @static
         * @param {line.ILine} message Line message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Line.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Line message from the specified reader or buffer.
         * @function decode
         * @memberof line.Line
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {line.Line} Line
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Line.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.line.Line();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.lineCode = reader.string();
                        break;
                    }
                case 3: {
                        message.lineName = reader.string();
                        break;
                    }
                case 4: {
                        message.area = reader.string();
                        break;
                    }
                case 5: {
                        message.district = reader.string();
                        break;
                    }
                case 6: {
                        message.lineValue = reader.int64();
                        break;
                    }
                case 7: {
                        message.actualValue = reader.int64();
                        break;
                    }
                case 8: {
                        message.paid = reader.int64();
                        break;
                    }
                case 9: {
                        message.lineDebt = reader.int64();
                        break;
                    }
                case 10: {
                        message.lineRevenue = reader.int64();
                        break;
                    }
                case 11: {
                        message.lineProfit = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Line message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof line.Line
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {line.Line} Line
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Line.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Line message.
         * @function verify
         * @memberof line.Line
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Line.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.lineCode != null && message.hasOwnProperty("lineCode"))
                if (!$util.isString(message.lineCode))
                    return "lineCode: string expected";
            if (message.lineName != null && message.hasOwnProperty("lineName"))
                if (!$util.isString(message.lineName))
                    return "lineName: string expected";
            if (message.area != null && message.hasOwnProperty("area"))
                if (!$util.isString(message.area))
                    return "area: string expected";
            if (message.district != null && message.hasOwnProperty("district"))
                if (!$util.isString(message.district))
                    return "district: string expected";
            if (message.lineValue != null && message.hasOwnProperty("lineValue"))
                if (!$util.isInteger(message.lineValue) && !(message.lineValue && $util.isInteger(message.lineValue.low) && $util.isInteger(message.lineValue.high)))
                    return "lineValue: integer|Long expected";
            if (message.actualValue != null && message.hasOwnProperty("actualValue"))
                if (!$util.isInteger(message.actualValue) && !(message.actualValue && $util.isInteger(message.actualValue.low) && $util.isInteger(message.actualValue.high)))
                    return "actualValue: integer|Long expected";
            if (message.paid != null && message.hasOwnProperty("paid"))
                if (!$util.isInteger(message.paid) && !(message.paid && $util.isInteger(message.paid.low) && $util.isInteger(message.paid.high)))
                    return "paid: integer|Long expected";
            if (message.lineDebt != null && message.hasOwnProperty("lineDebt"))
                if (!$util.isInteger(message.lineDebt) && !(message.lineDebt && $util.isInteger(message.lineDebt.low) && $util.isInteger(message.lineDebt.high)))
                    return "lineDebt: integer|Long expected";
            if (message.lineRevenue != null && message.hasOwnProperty("lineRevenue"))
                if (!$util.isInteger(message.lineRevenue) && !(message.lineRevenue && $util.isInteger(message.lineRevenue.low) && $util.isInteger(message.lineRevenue.high)))
                    return "lineRevenue: integer|Long expected";
            if (message.lineProfit != null && message.hasOwnProperty("lineProfit"))
                if (!$util.isInteger(message.lineProfit) && !(message.lineProfit && $util.isInteger(message.lineProfit.low) && $util.isInteger(message.lineProfit.high)))
                    return "lineProfit: integer|Long expected";
            return null;
        };

        /**
         * Creates a Line message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof line.Line
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {line.Line} Line
         */
        Line.fromObject = function fromObject(object) {
            if (object instanceof $root.line.Line)
                return object;
            let message = new $root.line.Line();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.lineCode != null)
                message.lineCode = String(object.lineCode);
            if (object.lineName != null)
                message.lineName = String(object.lineName);
            if (object.area != null)
                message.area = String(object.area);
            if (object.district != null)
                message.district = String(object.district);
            if (object.lineValue != null)
                if ($util.Long)
                    (message.lineValue = $util.Long.fromValue(object.lineValue)).unsigned = false;
                else if (typeof object.lineValue === "string")
                    message.lineValue = parseInt(object.lineValue, 10);
                else if (typeof object.lineValue === "number")
                    message.lineValue = object.lineValue;
                else if (typeof object.lineValue === "object")
                    message.lineValue = new $util.LongBits(object.lineValue.low >>> 0, object.lineValue.high >>> 0).toNumber();
            if (object.actualValue != null)
                if ($util.Long)
                    (message.actualValue = $util.Long.fromValue(object.actualValue)).unsigned = false;
                else if (typeof object.actualValue === "string")
                    message.actualValue = parseInt(object.actualValue, 10);
                else if (typeof object.actualValue === "number")
                    message.actualValue = object.actualValue;
                else if (typeof object.actualValue === "object")
                    message.actualValue = new $util.LongBits(object.actualValue.low >>> 0, object.actualValue.high >>> 0).toNumber();
            if (object.paid != null)
                if ($util.Long)
                    (message.paid = $util.Long.fromValue(object.paid)).unsigned = false;
                else if (typeof object.paid === "string")
                    message.paid = parseInt(object.paid, 10);
                else if (typeof object.paid === "number")
                    message.paid = object.paid;
                else if (typeof object.paid === "object")
                    message.paid = new $util.LongBits(object.paid.low >>> 0, object.paid.high >>> 0).toNumber();
            if (object.lineDebt != null)
                if ($util.Long)
                    (message.lineDebt = $util.Long.fromValue(object.lineDebt)).unsigned = false;
                else if (typeof object.lineDebt === "string")
                    message.lineDebt = parseInt(object.lineDebt, 10);
                else if (typeof object.lineDebt === "number")
                    message.lineDebt = object.lineDebt;
                else if (typeof object.lineDebt === "object")
                    message.lineDebt = new $util.LongBits(object.lineDebt.low >>> 0, object.lineDebt.high >>> 0).toNumber();
            if (object.lineRevenue != null)
                if ($util.Long)
                    (message.lineRevenue = $util.Long.fromValue(object.lineRevenue)).unsigned = false;
                else if (typeof object.lineRevenue === "string")
                    message.lineRevenue = parseInt(object.lineRevenue, 10);
                else if (typeof object.lineRevenue === "number")
                    message.lineRevenue = object.lineRevenue;
                else if (typeof object.lineRevenue === "object")
                    message.lineRevenue = new $util.LongBits(object.lineRevenue.low >>> 0, object.lineRevenue.high >>> 0).toNumber();
            if (object.lineProfit != null)
                if ($util.Long)
                    (message.lineProfit = $util.Long.fromValue(object.lineProfit)).unsigned = false;
                else if (typeof object.lineProfit === "string")
                    message.lineProfit = parseInt(object.lineProfit, 10);
                else if (typeof object.lineProfit === "number")
                    message.lineProfit = object.lineProfit;
                else if (typeof object.lineProfit === "object")
                    message.lineProfit = new $util.LongBits(object.lineProfit.low >>> 0, object.lineProfit.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Line message. Also converts values to other types if specified.
         * @function toObject
         * @memberof line.Line
         * @static
         * @param {line.Line} message Line
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Line.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.lineCode = "";
                object.lineName = "";
                object.area = "";
                object.district = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lineValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lineValue = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.actualValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.actualValue = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.paid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.paid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lineDebt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lineDebt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lineRevenue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lineRevenue = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lineProfit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lineProfit = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.lineCode != null && message.hasOwnProperty("lineCode"))
                object.lineCode = message.lineCode;
            if (message.lineName != null && message.hasOwnProperty("lineName"))
                object.lineName = message.lineName;
            if (message.area != null && message.hasOwnProperty("area"))
                object.area = message.area;
            if (message.district != null && message.hasOwnProperty("district"))
                object.district = message.district;
            if (message.lineValue != null && message.hasOwnProperty("lineValue"))
                if (typeof message.lineValue === "number")
                    object.lineValue = options.longs === String ? String(message.lineValue) : message.lineValue;
                else
                    object.lineValue = options.longs === String ? $util.Long.prototype.toString.call(message.lineValue) : options.longs === Number ? new $util.LongBits(message.lineValue.low >>> 0, message.lineValue.high >>> 0).toNumber() : message.lineValue;
            if (message.actualValue != null && message.hasOwnProperty("actualValue"))
                if (typeof message.actualValue === "number")
                    object.actualValue = options.longs === String ? String(message.actualValue) : message.actualValue;
                else
                    object.actualValue = options.longs === String ? $util.Long.prototype.toString.call(message.actualValue) : options.longs === Number ? new $util.LongBits(message.actualValue.low >>> 0, message.actualValue.high >>> 0).toNumber() : message.actualValue;
            if (message.paid != null && message.hasOwnProperty("paid"))
                if (typeof message.paid === "number")
                    object.paid = options.longs === String ? String(message.paid) : message.paid;
                else
                    object.paid = options.longs === String ? $util.Long.prototype.toString.call(message.paid) : options.longs === Number ? new $util.LongBits(message.paid.low >>> 0, message.paid.high >>> 0).toNumber() : message.paid;
            if (message.lineDebt != null && message.hasOwnProperty("lineDebt"))
                if (typeof message.lineDebt === "number")
                    object.lineDebt = options.longs === String ? String(message.lineDebt) : message.lineDebt;
                else
                    object.lineDebt = options.longs === String ? $util.Long.prototype.toString.call(message.lineDebt) : options.longs === Number ? new $util.LongBits(message.lineDebt.low >>> 0, message.lineDebt.high >>> 0).toNumber() : message.lineDebt;
            if (message.lineRevenue != null && message.hasOwnProperty("lineRevenue"))
                if (typeof message.lineRevenue === "number")
                    object.lineRevenue = options.longs === String ? String(message.lineRevenue) : message.lineRevenue;
                else
                    object.lineRevenue = options.longs === String ? $util.Long.prototype.toString.call(message.lineRevenue) : options.longs === Number ? new $util.LongBits(message.lineRevenue.low >>> 0, message.lineRevenue.high >>> 0).toNumber() : message.lineRevenue;
            if (message.lineProfit != null && message.hasOwnProperty("lineProfit"))
                if (typeof message.lineProfit === "number")
                    object.lineProfit = options.longs === String ? String(message.lineProfit) : message.lineProfit;
                else
                    object.lineProfit = options.longs === String ? $util.Long.prototype.toString.call(message.lineProfit) : options.longs === Number ? new $util.LongBits(message.lineProfit.low >>> 0, message.lineProfit.high >>> 0).toNumber() : message.lineProfit;
            return object;
        };

        /**
         * Converts this Line to JSON.
         * @function toJSON
         * @memberof line.Line
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Line.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Line
         * @function getTypeUrl
         * @memberof line.Line
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Line.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/line.Line";
        };

        return Line;
    })();

    line.LineList = (function() {

        /**
         * Properties of a LineList.
         * @memberof line
         * @interface ILineList
         * @property {Array.<line.ILine>|null} [lines] LineList lines
         */

        /**
         * Constructs a new LineList.
         * @memberof line
         * @classdesc Represents a LineList.
         * @implements ILineList
         * @constructor
         * @param {line.ILineList=} [properties] Properties to set
         */
        function LineList(properties) {
            this.lines = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LineList lines.
         * @member {Array.<line.ILine>} lines
         * @memberof line.LineList
         * @instance
         */
        LineList.prototype.lines = $util.emptyArray;

        /**
         * Creates a new LineList instance using the specified properties.
         * @function create
         * @memberof line.LineList
         * @static
         * @param {line.ILineList=} [properties] Properties to set
         * @returns {line.LineList} LineList instance
         */
        LineList.create = function create(properties) {
            return new LineList(properties);
        };

        /**
         * Encodes the specified LineList message. Does not implicitly {@link line.LineList.verify|verify} messages.
         * @function encode
         * @memberof line.LineList
         * @static
         * @param {line.ILineList} message LineList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LineList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lines != null && message.lines.length)
                for (let i = 0; i < message.lines.length; ++i)
                    $root.line.Line.encode(message.lines[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LineList message, length delimited. Does not implicitly {@link line.LineList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof line.LineList
         * @static
         * @param {line.ILineList} message LineList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LineList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LineList message from the specified reader or buffer.
         * @function decode
         * @memberof line.LineList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {line.LineList} LineList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LineList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.line.LineList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.lines && message.lines.length))
                            message.lines = [];
                        message.lines.push($root.line.Line.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LineList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof line.LineList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {line.LineList} LineList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LineList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LineList message.
         * @function verify
         * @memberof line.LineList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LineList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lines != null && message.hasOwnProperty("lines")) {
                if (!Array.isArray(message.lines))
                    return "lines: array expected";
                for (let i = 0; i < message.lines.length; ++i) {
                    let error = $root.line.Line.verify(message.lines[i]);
                    if (error)
                        return "lines." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LineList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof line.LineList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {line.LineList} LineList
         */
        LineList.fromObject = function fromObject(object) {
            if (object instanceof $root.line.LineList)
                return object;
            let message = new $root.line.LineList();
            if (object.lines) {
                if (!Array.isArray(object.lines))
                    throw TypeError(".line.LineList.lines: array expected");
                message.lines = [];
                for (let i = 0; i < object.lines.length; ++i) {
                    if (typeof object.lines[i] !== "object")
                        throw TypeError(".line.LineList.lines: object expected");
                    message.lines[i] = $root.line.Line.fromObject(object.lines[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LineList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof line.LineList
         * @static
         * @param {line.LineList} message LineList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LineList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.lines = [];
            if (message.lines && message.lines.length) {
                object.lines = [];
                for (let j = 0; j < message.lines.length; ++j)
                    object.lines[j] = $root.line.Line.toObject(message.lines[j], options);
            }
            return object;
        };

        /**
         * Converts this LineList to JSON.
         * @function toJSON
         * @memberof line.LineList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LineList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LineList
         * @function getTypeUrl
         * @memberof line.LineList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LineList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/line.LineList";
        };

        return LineList;
    })();

    line.PostLine = (function() {

        /**
         * Properties of a PostLine.
         * @memberof line
         * @interface IPostLine
         * @property {string|null} [lineCode] PostLine lineCode
         * @property {string|null} [lineName] PostLine lineName
         * @property {string|null} [area] PostLine area
         * @property {string|null} [district] PostLine district
         */

        /**
         * Constructs a new PostLine.
         * @memberof line
         * @classdesc Represents a PostLine.
         * @implements IPostLine
         * @constructor
         * @param {line.IPostLine=} [properties] Properties to set
         */
        function PostLine(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PostLine lineCode.
         * @member {string} lineCode
         * @memberof line.PostLine
         * @instance
         */
        PostLine.prototype.lineCode = "";

        /**
         * PostLine lineName.
         * @member {string} lineName
         * @memberof line.PostLine
         * @instance
         */
        PostLine.prototype.lineName = "";

        /**
         * PostLine area.
         * @member {string} area
         * @memberof line.PostLine
         * @instance
         */
        PostLine.prototype.area = "";

        /**
         * PostLine district.
         * @member {string} district
         * @memberof line.PostLine
         * @instance
         */
        PostLine.prototype.district = "";

        /**
         * Creates a new PostLine instance using the specified properties.
         * @function create
         * @memberof line.PostLine
         * @static
         * @param {line.IPostLine=} [properties] Properties to set
         * @returns {line.PostLine} PostLine instance
         */
        PostLine.create = function create(properties) {
            return new PostLine(properties);
        };

        /**
         * Encodes the specified PostLine message. Does not implicitly {@link line.PostLine.verify|verify} messages.
         * @function encode
         * @memberof line.PostLine
         * @static
         * @param {line.IPostLine} message PostLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostLine.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lineCode != null && Object.hasOwnProperty.call(message, "lineCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.lineCode);
            if (message.lineName != null && Object.hasOwnProperty.call(message, "lineName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lineName);
            if (message.area != null && Object.hasOwnProperty.call(message, "area"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.area);
            if (message.district != null && Object.hasOwnProperty.call(message, "district"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.district);
            return writer;
        };

        /**
         * Encodes the specified PostLine message, length delimited. Does not implicitly {@link line.PostLine.verify|verify} messages.
         * @function encodeDelimited
         * @memberof line.PostLine
         * @static
         * @param {line.IPostLine} message PostLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostLine.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PostLine message from the specified reader or buffer.
         * @function decode
         * @memberof line.PostLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {line.PostLine} PostLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostLine.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.line.PostLine();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.lineCode = reader.string();
                        break;
                    }
                case 2: {
                        message.lineName = reader.string();
                        break;
                    }
                case 3: {
                        message.area = reader.string();
                        break;
                    }
                case 4: {
                        message.district = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PostLine message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof line.PostLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {line.PostLine} PostLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostLine.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PostLine message.
         * @function verify
         * @memberof line.PostLine
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PostLine.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lineCode != null && message.hasOwnProperty("lineCode"))
                if (!$util.isString(message.lineCode))
                    return "lineCode: string expected";
            if (message.lineName != null && message.hasOwnProperty("lineName"))
                if (!$util.isString(message.lineName))
                    return "lineName: string expected";
            if (message.area != null && message.hasOwnProperty("area"))
                if (!$util.isString(message.area))
                    return "area: string expected";
            if (message.district != null && message.hasOwnProperty("district"))
                if (!$util.isString(message.district))
                    return "district: string expected";
            return null;
        };

        /**
         * Creates a PostLine message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof line.PostLine
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {line.PostLine} PostLine
         */
        PostLine.fromObject = function fromObject(object) {
            if (object instanceof $root.line.PostLine)
                return object;
            let message = new $root.line.PostLine();
            if (object.lineCode != null)
                message.lineCode = String(object.lineCode);
            if (object.lineName != null)
                message.lineName = String(object.lineName);
            if (object.area != null)
                message.area = String(object.area);
            if (object.district != null)
                message.district = String(object.district);
            return message;
        };

        /**
         * Creates a plain object from a PostLine message. Also converts values to other types if specified.
         * @function toObject
         * @memberof line.PostLine
         * @static
         * @param {line.PostLine} message PostLine
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PostLine.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.lineCode = "";
                object.lineName = "";
                object.area = "";
                object.district = "";
            }
            if (message.lineCode != null && message.hasOwnProperty("lineCode"))
                object.lineCode = message.lineCode;
            if (message.lineName != null && message.hasOwnProperty("lineName"))
                object.lineName = message.lineName;
            if (message.area != null && message.hasOwnProperty("area"))
                object.area = message.area;
            if (message.district != null && message.hasOwnProperty("district"))
                object.district = message.district;
            return object;
        };

        /**
         * Converts this PostLine to JSON.
         * @function toJSON
         * @memberof line.PostLine
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PostLine.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PostLine
         * @function getTypeUrl
         * @memberof line.PostLine
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PostLine.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/line.PostLine";
        };

        return PostLine;
    })();

    line.PostLineResponse = (function() {

        /**
         * Properties of a PostLineResponse.
         * @memberof line
         * @interface IPostLineResponse
         * @property {line.ILine|null} [line] PostLineResponse line
         */

        /**
         * Constructs a new PostLineResponse.
         * @memberof line
         * @classdesc Represents a PostLineResponse.
         * @implements IPostLineResponse
         * @constructor
         * @param {line.IPostLineResponse=} [properties] Properties to set
         */
        function PostLineResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PostLineResponse line.
         * @member {line.ILine|null|undefined} line
         * @memberof line.PostLineResponse
         * @instance
         */
        PostLineResponse.prototype.line = null;

        /**
         * Creates a new PostLineResponse instance using the specified properties.
         * @function create
         * @memberof line.PostLineResponse
         * @static
         * @param {line.IPostLineResponse=} [properties] Properties to set
         * @returns {line.PostLineResponse} PostLineResponse instance
         */
        PostLineResponse.create = function create(properties) {
            return new PostLineResponse(properties);
        };

        /**
         * Encodes the specified PostLineResponse message. Does not implicitly {@link line.PostLineResponse.verify|verify} messages.
         * @function encode
         * @memberof line.PostLineResponse
         * @static
         * @param {line.IPostLineResponse} message PostLineResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostLineResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                $root.line.Line.encode(message.line, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PostLineResponse message, length delimited. Does not implicitly {@link line.PostLineResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof line.PostLineResponse
         * @static
         * @param {line.IPostLineResponse} message PostLineResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostLineResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PostLineResponse message from the specified reader or buffer.
         * @function decode
         * @memberof line.PostLineResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {line.PostLineResponse} PostLineResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostLineResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.line.PostLineResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.line = $root.line.Line.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PostLineResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof line.PostLineResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {line.PostLineResponse} PostLineResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostLineResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PostLineResponse message.
         * @function verify
         * @memberof line.PostLineResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PostLineResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.line != null && message.hasOwnProperty("line")) {
                let error = $root.line.Line.verify(message.line);
                if (error)
                    return "line." + error;
            }
            return null;
        };

        /**
         * Creates a PostLineResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof line.PostLineResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {line.PostLineResponse} PostLineResponse
         */
        PostLineResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.line.PostLineResponse)
                return object;
            let message = new $root.line.PostLineResponse();
            if (object.line != null) {
                if (typeof object.line !== "object")
                    throw TypeError(".line.PostLineResponse.line: object expected");
                message.line = $root.line.Line.fromObject(object.line);
            }
            return message;
        };

        /**
         * Creates a plain object from a PostLineResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof line.PostLineResponse
         * @static
         * @param {line.PostLineResponse} message PostLineResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PostLineResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.line = null;
            if (message.line != null && message.hasOwnProperty("line"))
                object.line = $root.line.Line.toObject(message.line, options);
            return object;
        };

        /**
         * Converts this PostLineResponse to JSON.
         * @function toJSON
         * @memberof line.PostLineResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PostLineResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PostLineResponse
         * @function getTypeUrl
         * @memberof line.PostLineResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PostLineResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/line.PostLineResponse";
        };

        return PostLineResponse;
    })();

    return line;
})();

export const product = $root.product = (() => {

    /**
     * Namespace product.
     * @exports product
     * @namespace
     */
    const product = {};

    product.Variant = (function() {

        /**
         * Properties of a Variant.
         * @memberof product
         * @interface IVariant
         * @property {string|null} [id] Variant id
         * @property {string|null} [name] Variant name
         * @property {number|null} [price] Variant price
         * @property {number|null} [qty] Variant qty
         * @property {Object.<string,string>|null} [attrs] Variant attrs
         * @property {Array.<string>|null} [keys] Variant keys
         * @property {number|null} [sn] Variant sn
         */

        /**
         * Constructs a new Variant.
         * @memberof product
         * @classdesc Represents a Variant.
         * @implements IVariant
         * @constructor
         * @param {product.IVariant=} [properties] Properties to set
         */
        function Variant(properties) {
            this.attrs = {};
            this.keys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Variant id.
         * @member {string} id
         * @memberof product.Variant
         * @instance
         */
        Variant.prototype.id = "";

        /**
         * Variant name.
         * @member {string} name
         * @memberof product.Variant
         * @instance
         */
        Variant.prototype.name = "";

        /**
         * Variant price.
         * @member {number} price
         * @memberof product.Variant
         * @instance
         */
        Variant.prototype.price = 0;

        /**
         * Variant qty.
         * @member {number} qty
         * @memberof product.Variant
         * @instance
         */
        Variant.prototype.qty = 0;

        /**
         * Variant attrs.
         * @member {Object.<string,string>} attrs
         * @memberof product.Variant
         * @instance
         */
        Variant.prototype.attrs = $util.emptyObject;

        /**
         * Variant keys.
         * @member {Array.<string>} keys
         * @memberof product.Variant
         * @instance
         */
        Variant.prototype.keys = $util.emptyArray;

        /**
         * Variant sn.
         * @member {number} sn
         * @memberof product.Variant
         * @instance
         */
        Variant.prototype.sn = 0;

        /**
         * Creates a new Variant instance using the specified properties.
         * @function create
         * @memberof product.Variant
         * @static
         * @param {product.IVariant=} [properties] Properties to set
         * @returns {product.Variant} Variant instance
         */
        Variant.create = function create(properties) {
            return new Variant(properties);
        };

        /**
         * Encodes the specified Variant message. Does not implicitly {@link product.Variant.verify|verify} messages.
         * @function encode
         * @memberof product.Variant
         * @static
         * @param {product.IVariant} message Variant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Variant.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.price);
            if (message.qty != null && Object.hasOwnProperty.call(message, "qty"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.qty);
            if (message.attrs != null && Object.hasOwnProperty.call(message, "attrs"))
                for (let keys = Object.keys(message.attrs), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.attrs[keys[i]]).ldelim();
            if (message.keys != null && message.keys.length)
                for (let i = 0; i < message.keys.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.keys[i]);
            if (message.sn != null && Object.hasOwnProperty.call(message, "sn"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.sn);
            return writer;
        };

        /**
         * Encodes the specified Variant message, length delimited. Does not implicitly {@link product.Variant.verify|verify} messages.
         * @function encodeDelimited
         * @memberof product.Variant
         * @static
         * @param {product.IVariant} message Variant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Variant.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Variant message from the specified reader or buffer.
         * @function decode
         * @memberof product.Variant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {product.Variant} Variant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Variant.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.Variant(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.price = reader.int32();
                        break;
                    }
                case 4: {
                        message.qty = reader.int32();
                        break;
                    }
                case 6: {
                        if (message.attrs === $util.emptyObject)
                            message.attrs = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.attrs[key] = value;
                        break;
                    }
                case 7: {
                        if (!(message.keys && message.keys.length))
                            message.keys = [];
                        message.keys.push(reader.string());
                        break;
                    }
                case 8: {
                        message.sn = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Variant message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof product.Variant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {product.Variant} Variant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Variant.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Variant message.
         * @function verify
         * @memberof product.Variant
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Variant.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price))
                    return "price: integer expected";
            if (message.qty != null && message.hasOwnProperty("qty"))
                if (!$util.isInteger(message.qty))
                    return "qty: integer expected";
            if (message.attrs != null && message.hasOwnProperty("attrs")) {
                if (!$util.isObject(message.attrs))
                    return "attrs: object expected";
                let key = Object.keys(message.attrs);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.attrs[key[i]]))
                        return "attrs: string{k:string} expected";
            }
            if (message.keys != null && message.hasOwnProperty("keys")) {
                if (!Array.isArray(message.keys))
                    return "keys: array expected";
                for (let i = 0; i < message.keys.length; ++i)
                    if (!$util.isString(message.keys[i]))
                        return "keys: string[] expected";
            }
            if (message.sn != null && message.hasOwnProperty("sn"))
                if (!$util.isInteger(message.sn))
                    return "sn: integer expected";
            return null;
        };

        /**
         * Creates a Variant message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof product.Variant
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {product.Variant} Variant
         */
        Variant.fromObject = function fromObject(object) {
            if (object instanceof $root.product.Variant)
                return object;
            let message = new $root.product.Variant();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.price != null)
                message.price = object.price | 0;
            if (object.qty != null)
                message.qty = object.qty | 0;
            if (object.attrs) {
                if (typeof object.attrs !== "object")
                    throw TypeError(".product.Variant.attrs: object expected");
                message.attrs = {};
                for (let keys = Object.keys(object.attrs), i = 0; i < keys.length; ++i)
                    message.attrs[keys[i]] = String(object.attrs[keys[i]]);
            }
            if (object.keys) {
                if (!Array.isArray(object.keys))
                    throw TypeError(".product.Variant.keys: array expected");
                message.keys = [];
                for (let i = 0; i < object.keys.length; ++i)
                    message.keys[i] = String(object.keys[i]);
            }
            if (object.sn != null)
                message.sn = object.sn | 0;
            return message;
        };

        /**
         * Creates a plain object from a Variant message. Also converts values to other types if specified.
         * @function toObject
         * @memberof product.Variant
         * @static
         * @param {product.Variant} message Variant
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Variant.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.keys = [];
            if (options.objects || options.defaults)
                object.attrs = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.price = 0;
                object.qty = 0;
                object.sn = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = message.price;
            if (message.qty != null && message.hasOwnProperty("qty"))
                object.qty = message.qty;
            let keys2;
            if (message.attrs && (keys2 = Object.keys(message.attrs)).length) {
                object.attrs = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.attrs[keys2[j]] = message.attrs[keys2[j]];
            }
            if (message.keys && message.keys.length) {
                object.keys = [];
                for (let j = 0; j < message.keys.length; ++j)
                    object.keys[j] = message.keys[j];
            }
            if (message.sn != null && message.hasOwnProperty("sn"))
                object.sn = message.sn;
            return object;
        };

        /**
         * Converts this Variant to JSON.
         * @function toJSON
         * @memberof product.Variant
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Variant.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Variant
         * @function getTypeUrl
         * @memberof product.Variant
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Variant.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/product.Variant";
        };

        return Variant;
    })();

    product.Product = (function() {

        /**
         * Properties of a Product.
         * @memberof product
         * @interface IProduct
         * @property {string|null} [name] Product name
         * @property {string|null} [description] Product description
         * @property {string|null} [category] Product category
         * @property {number|null} [totalQuantity] Product totalQuantity
         * @property {number|null} [totalValue] Product totalValue
         * @property {number|null} [variantCount] Product variantCount
         * @property {Array.<product.IVariant>|null} [variants] Product variants
         */

        /**
         * Constructs a new Product.
         * @memberof product
         * @classdesc Represents a Product.
         * @implements IProduct
         * @constructor
         * @param {product.IProduct=} [properties] Properties to set
         */
        function Product(properties) {
            this.variants = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Product name.
         * @member {string} name
         * @memberof product.Product
         * @instance
         */
        Product.prototype.name = "";

        /**
         * Product description.
         * @member {string} description
         * @memberof product.Product
         * @instance
         */
        Product.prototype.description = "";

        /**
         * Product category.
         * @member {string} category
         * @memberof product.Product
         * @instance
         */
        Product.prototype.category = "";

        /**
         * Product totalQuantity.
         * @member {number} totalQuantity
         * @memberof product.Product
         * @instance
         */
        Product.prototype.totalQuantity = 0;

        /**
         * Product totalValue.
         * @member {number} totalValue
         * @memberof product.Product
         * @instance
         */
        Product.prototype.totalValue = 0;

        /**
         * Product variantCount.
         * @member {number} variantCount
         * @memberof product.Product
         * @instance
         */
        Product.prototype.variantCount = 0;

        /**
         * Product variants.
         * @member {Array.<product.IVariant>} variants
         * @memberof product.Product
         * @instance
         */
        Product.prototype.variants = $util.emptyArray;

        /**
         * Creates a new Product instance using the specified properties.
         * @function create
         * @memberof product.Product
         * @static
         * @param {product.IProduct=} [properties] Properties to set
         * @returns {product.Product} Product instance
         */
        Product.create = function create(properties) {
            return new Product(properties);
        };

        /**
         * Encodes the specified Product message. Does not implicitly {@link product.Product.verify|verify} messages.
         * @function encode
         * @memberof product.Product
         * @static
         * @param {product.IProduct} message Product message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Product.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.category);
            if (message.totalQuantity != null && Object.hasOwnProperty.call(message, "totalQuantity"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.totalQuantity);
            if (message.totalValue != null && Object.hasOwnProperty.call(message, "totalValue"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.totalValue);
            if (message.variantCount != null && Object.hasOwnProperty.call(message, "variantCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.variantCount);
            if (message.variants != null && message.variants.length)
                for (let i = 0; i < message.variants.length; ++i)
                    $root.product.Variant.encode(message.variants[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Product message, length delimited. Does not implicitly {@link product.Product.verify|verify} messages.
         * @function encodeDelimited
         * @memberof product.Product
         * @static
         * @param {product.IProduct} message Product message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Product.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Product message from the specified reader or buffer.
         * @function decode
         * @memberof product.Product
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {product.Product} Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Product.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.Product();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.description = reader.string();
                        break;
                    }
                case 3: {
                        message.category = reader.string();
                        break;
                    }
                case 4: {
                        message.totalQuantity = reader.int32();
                        break;
                    }
                case 5: {
                        message.totalValue = reader.double();
                        break;
                    }
                case 6: {
                        message.variantCount = reader.int32();
                        break;
                    }
                case 7: {
                        if (!(message.variants && message.variants.length))
                            message.variants = [];
                        message.variants.push($root.product.Variant.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Product message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof product.Product
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {product.Product} Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Product.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Product message.
         * @function verify
         * @memberof product.Product
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Product.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.category != null && message.hasOwnProperty("category"))
                if (!$util.isString(message.category))
                    return "category: string expected";
            if (message.totalQuantity != null && message.hasOwnProperty("totalQuantity"))
                if (!$util.isInteger(message.totalQuantity))
                    return "totalQuantity: integer expected";
            if (message.totalValue != null && message.hasOwnProperty("totalValue"))
                if (typeof message.totalValue !== "number")
                    return "totalValue: number expected";
            if (message.variantCount != null && message.hasOwnProperty("variantCount"))
                if (!$util.isInteger(message.variantCount))
                    return "variantCount: integer expected";
            if (message.variants != null && message.hasOwnProperty("variants")) {
                if (!Array.isArray(message.variants))
                    return "variants: array expected";
                for (let i = 0; i < message.variants.length; ++i) {
                    let error = $root.product.Variant.verify(message.variants[i]);
                    if (error)
                        return "variants." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Product message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof product.Product
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {product.Product} Product
         */
        Product.fromObject = function fromObject(object) {
            if (object instanceof $root.product.Product)
                return object;
            let message = new $root.product.Product();
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.category != null)
                message.category = String(object.category);
            if (object.totalQuantity != null)
                message.totalQuantity = object.totalQuantity | 0;
            if (object.totalValue != null)
                message.totalValue = Number(object.totalValue);
            if (object.variantCount != null)
                message.variantCount = object.variantCount | 0;
            if (object.variants) {
                if (!Array.isArray(object.variants))
                    throw TypeError(".product.Product.variants: array expected");
                message.variants = [];
                for (let i = 0; i < object.variants.length; ++i) {
                    if (typeof object.variants[i] !== "object")
                        throw TypeError(".product.Product.variants: object expected");
                    message.variants[i] = $root.product.Variant.fromObject(object.variants[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Product message. Also converts values to other types if specified.
         * @function toObject
         * @memberof product.Product
         * @static
         * @param {product.Product} message Product
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Product.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.variants = [];
            if (options.defaults) {
                object.name = "";
                object.description = "";
                object.category = "";
                object.totalQuantity = 0;
                object.totalValue = 0;
                object.variantCount = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = message.category;
            if (message.totalQuantity != null && message.hasOwnProperty("totalQuantity"))
                object.totalQuantity = message.totalQuantity;
            if (message.totalValue != null && message.hasOwnProperty("totalValue"))
                object.totalValue = options.json && !isFinite(message.totalValue) ? String(message.totalValue) : message.totalValue;
            if (message.variantCount != null && message.hasOwnProperty("variantCount"))
                object.variantCount = message.variantCount;
            if (message.variants && message.variants.length) {
                object.variants = [];
                for (let j = 0; j < message.variants.length; ++j)
                    object.variants[j] = $root.product.Variant.toObject(message.variants[j], options);
            }
            return object;
        };

        /**
         * Converts this Product to JSON.
         * @function toJSON
         * @memberof product.Product
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Product.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Product
         * @function getTypeUrl
         * @memberof product.Product
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Product.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/product.Product";
        };

        return Product;
    })();

    product.ProductList = (function() {

        /**
         * Properties of a ProductList.
         * @memberof product
         * @interface IProductList
         * @property {number|null} [id] ProductList id
         * @property {string|null} [name] ProductList name
         * @property {string|null} [category] ProductList category
         * @property {number|null} [totalQuantity] ProductList totalQuantity
         * @property {number|null} [totalValue] ProductList totalValue
         * @property {number|null} [variantCount] ProductList variantCount
         * @property {number|Long|null} [total] ProductList total
         * @property {number|Long|null} [totalUnit] ProductList totalUnit
         * @property {number|Long|null} [inventoryValue] ProductList inventoryValue
         * @property {number|Long|null} [totalVariant] ProductList totalVariant
         */

        /**
         * Constructs a new ProductList.
         * @memberof product
         * @classdesc Represents a ProductList.
         * @implements IProductList
         * @constructor
         * @param {product.IProductList=} [properties] Properties to set
         */
        function ProductList(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProductList id.
         * @member {number} id
         * @memberof product.ProductList
         * @instance
         */
        ProductList.prototype.id = 0;

        /**
         * ProductList name.
         * @member {string} name
         * @memberof product.ProductList
         * @instance
         */
        ProductList.prototype.name = "";

        /**
         * ProductList category.
         * @member {string} category
         * @memberof product.ProductList
         * @instance
         */
        ProductList.prototype.category = "";

        /**
         * ProductList totalQuantity.
         * @member {number} totalQuantity
         * @memberof product.ProductList
         * @instance
         */
        ProductList.prototype.totalQuantity = 0;

        /**
         * ProductList totalValue.
         * @member {number} totalValue
         * @memberof product.ProductList
         * @instance
         */
        ProductList.prototype.totalValue = 0;

        /**
         * ProductList variantCount.
         * @member {number} variantCount
         * @memberof product.ProductList
         * @instance
         */
        ProductList.prototype.variantCount = 0;

        /**
         * ProductList total.
         * @member {number|Long} total
         * @memberof product.ProductList
         * @instance
         */
        ProductList.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ProductList totalUnit.
         * @member {number|Long} totalUnit
         * @memberof product.ProductList
         * @instance
         */
        ProductList.prototype.totalUnit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ProductList inventoryValue.
         * @member {number|Long} inventoryValue
         * @memberof product.ProductList
         * @instance
         */
        ProductList.prototype.inventoryValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ProductList totalVariant.
         * @member {number|Long} totalVariant
         * @memberof product.ProductList
         * @instance
         */
        ProductList.prototype.totalVariant = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ProductList instance using the specified properties.
         * @function create
         * @memberof product.ProductList
         * @static
         * @param {product.IProductList=} [properties] Properties to set
         * @returns {product.ProductList} ProductList instance
         */
        ProductList.create = function create(properties) {
            return new ProductList(properties);
        };

        /**
         * Encodes the specified ProductList message. Does not implicitly {@link product.ProductList.verify|verify} messages.
         * @function encode
         * @memberof product.ProductList
         * @static
         * @param {product.IProductList} message ProductList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.category);
            if (message.totalQuantity != null && Object.hasOwnProperty.call(message, "totalQuantity"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.totalQuantity);
            if (message.totalValue != null && Object.hasOwnProperty.call(message, "totalValue"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.totalValue);
            if (message.variantCount != null && Object.hasOwnProperty.call(message, "variantCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.variantCount);
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.total);
            if (message.totalUnit != null && Object.hasOwnProperty.call(message, "totalUnit"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.totalUnit);
            if (message.inventoryValue != null && Object.hasOwnProperty.call(message, "inventoryValue"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.inventoryValue);
            if (message.totalVariant != null && Object.hasOwnProperty.call(message, "totalVariant"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.totalVariant);
            return writer;
        };

        /**
         * Encodes the specified ProductList message, length delimited. Does not implicitly {@link product.ProductList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof product.ProductList
         * @static
         * @param {product.IProductList} message ProductList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProductList message from the specified reader or buffer.
         * @function decode
         * @memberof product.ProductList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {product.ProductList} ProductList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.ProductList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.category = reader.string();
                        break;
                    }
                case 4: {
                        message.totalQuantity = reader.int32();
                        break;
                    }
                case 5: {
                        message.totalValue = reader.int32();
                        break;
                    }
                case 6: {
                        message.variantCount = reader.int32();
                        break;
                    }
                case 7: {
                        message.total = reader.int64();
                        break;
                    }
                case 8: {
                        message.totalUnit = reader.int64();
                        break;
                    }
                case 9: {
                        message.inventoryValue = reader.int64();
                        break;
                    }
                case 10: {
                        message.totalVariant = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProductList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof product.ProductList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {product.ProductList} ProductList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProductList message.
         * @function verify
         * @memberof product.ProductList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProductList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.category != null && message.hasOwnProperty("category"))
                if (!$util.isString(message.category))
                    return "category: string expected";
            if (message.totalQuantity != null && message.hasOwnProperty("totalQuantity"))
                if (!$util.isInteger(message.totalQuantity))
                    return "totalQuantity: integer expected";
            if (message.totalValue != null && message.hasOwnProperty("totalValue"))
                if (!$util.isInteger(message.totalValue))
                    return "totalValue: integer expected";
            if (message.variantCount != null && message.hasOwnProperty("variantCount"))
                if (!$util.isInteger(message.variantCount))
                    return "variantCount: integer expected";
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            if (message.totalUnit != null && message.hasOwnProperty("totalUnit"))
                if (!$util.isInteger(message.totalUnit) && !(message.totalUnit && $util.isInteger(message.totalUnit.low) && $util.isInteger(message.totalUnit.high)))
                    return "totalUnit: integer|Long expected";
            if (message.inventoryValue != null && message.hasOwnProperty("inventoryValue"))
                if (!$util.isInteger(message.inventoryValue) && !(message.inventoryValue && $util.isInteger(message.inventoryValue.low) && $util.isInteger(message.inventoryValue.high)))
                    return "inventoryValue: integer|Long expected";
            if (message.totalVariant != null && message.hasOwnProperty("totalVariant"))
                if (!$util.isInteger(message.totalVariant) && !(message.totalVariant && $util.isInteger(message.totalVariant.low) && $util.isInteger(message.totalVariant.high)))
                    return "totalVariant: integer|Long expected";
            return null;
        };

        /**
         * Creates a ProductList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof product.ProductList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {product.ProductList} ProductList
         */
        ProductList.fromObject = function fromObject(object) {
            if (object instanceof $root.product.ProductList)
                return object;
            let message = new $root.product.ProductList();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.category != null)
                message.category = String(object.category);
            if (object.totalQuantity != null)
                message.totalQuantity = object.totalQuantity | 0;
            if (object.totalValue != null)
                message.totalValue = object.totalValue | 0;
            if (object.variantCount != null)
                message.variantCount = object.variantCount | 0;
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            if (object.totalUnit != null)
                if ($util.Long)
                    (message.totalUnit = $util.Long.fromValue(object.totalUnit)).unsigned = false;
                else if (typeof object.totalUnit === "string")
                    message.totalUnit = parseInt(object.totalUnit, 10);
                else if (typeof object.totalUnit === "number")
                    message.totalUnit = object.totalUnit;
                else if (typeof object.totalUnit === "object")
                    message.totalUnit = new $util.LongBits(object.totalUnit.low >>> 0, object.totalUnit.high >>> 0).toNumber();
            if (object.inventoryValue != null)
                if ($util.Long)
                    (message.inventoryValue = $util.Long.fromValue(object.inventoryValue)).unsigned = false;
                else if (typeof object.inventoryValue === "string")
                    message.inventoryValue = parseInt(object.inventoryValue, 10);
                else if (typeof object.inventoryValue === "number")
                    message.inventoryValue = object.inventoryValue;
                else if (typeof object.inventoryValue === "object")
                    message.inventoryValue = new $util.LongBits(object.inventoryValue.low >>> 0, object.inventoryValue.high >>> 0).toNumber();
            if (object.totalVariant != null)
                if ($util.Long)
                    (message.totalVariant = $util.Long.fromValue(object.totalVariant)).unsigned = false;
                else if (typeof object.totalVariant === "string")
                    message.totalVariant = parseInt(object.totalVariant, 10);
                else if (typeof object.totalVariant === "number")
                    message.totalVariant = object.totalVariant;
                else if (typeof object.totalVariant === "object")
                    message.totalVariant = new $util.LongBits(object.totalVariant.low >>> 0, object.totalVariant.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ProductList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof product.ProductList
         * @static
         * @param {product.ProductList} message ProductList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProductList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.category = "";
                object.totalQuantity = 0;
                object.totalValue = 0;
                object.variantCount = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.totalUnit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalUnit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.inventoryValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.inventoryValue = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.totalVariant = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalVariant = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = message.category;
            if (message.totalQuantity != null && message.hasOwnProperty("totalQuantity"))
                object.totalQuantity = message.totalQuantity;
            if (message.totalValue != null && message.hasOwnProperty("totalValue"))
                object.totalValue = message.totalValue;
            if (message.variantCount != null && message.hasOwnProperty("variantCount"))
                object.variantCount = message.variantCount;
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            if (message.totalUnit != null && message.hasOwnProperty("totalUnit"))
                if (typeof message.totalUnit === "number")
                    object.totalUnit = options.longs === String ? String(message.totalUnit) : message.totalUnit;
                else
                    object.totalUnit = options.longs === String ? $util.Long.prototype.toString.call(message.totalUnit) : options.longs === Number ? new $util.LongBits(message.totalUnit.low >>> 0, message.totalUnit.high >>> 0).toNumber() : message.totalUnit;
            if (message.inventoryValue != null && message.hasOwnProperty("inventoryValue"))
                if (typeof message.inventoryValue === "number")
                    object.inventoryValue = options.longs === String ? String(message.inventoryValue) : message.inventoryValue;
                else
                    object.inventoryValue = options.longs === String ? $util.Long.prototype.toString.call(message.inventoryValue) : options.longs === Number ? new $util.LongBits(message.inventoryValue.low >>> 0, message.inventoryValue.high >>> 0).toNumber() : message.inventoryValue;
            if (message.totalVariant != null && message.hasOwnProperty("totalVariant"))
                if (typeof message.totalVariant === "number")
                    object.totalVariant = options.longs === String ? String(message.totalVariant) : message.totalVariant;
                else
                    object.totalVariant = options.longs === String ? $util.Long.prototype.toString.call(message.totalVariant) : options.longs === Number ? new $util.LongBits(message.totalVariant.low >>> 0, message.totalVariant.high >>> 0).toNumber() : message.totalVariant;
            return object;
        };

        /**
         * Converts this ProductList to JSON.
         * @function toJSON
         * @memberof product.ProductList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProductList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProductList
         * @function getTypeUrl
         * @memberof product.ProductList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProductList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/product.ProductList";
        };

        return ProductList;
    })();

    product.ProductListResponse = (function() {

        /**
         * Properties of a ProductListResponse.
         * @memberof product
         * @interface IProductListResponse
         * @property {Array.<product.IProductList>|null} [products] ProductListResponse products
         */

        /**
         * Constructs a new ProductListResponse.
         * @memberof product
         * @classdesc Represents a ProductListResponse.
         * @implements IProductListResponse
         * @constructor
         * @param {product.IProductListResponse=} [properties] Properties to set
         */
        function ProductListResponse(properties) {
            this.products = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProductListResponse products.
         * @member {Array.<product.IProductList>} products
         * @memberof product.ProductListResponse
         * @instance
         */
        ProductListResponse.prototype.products = $util.emptyArray;

        /**
         * Creates a new ProductListResponse instance using the specified properties.
         * @function create
         * @memberof product.ProductListResponse
         * @static
         * @param {product.IProductListResponse=} [properties] Properties to set
         * @returns {product.ProductListResponse} ProductListResponse instance
         */
        ProductListResponse.create = function create(properties) {
            return new ProductListResponse(properties);
        };

        /**
         * Encodes the specified ProductListResponse message. Does not implicitly {@link product.ProductListResponse.verify|verify} messages.
         * @function encode
         * @memberof product.ProductListResponse
         * @static
         * @param {product.IProductListResponse} message ProductListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.products != null && message.products.length)
                for (let i = 0; i < message.products.length; ++i)
                    $root.product.ProductList.encode(message.products[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ProductListResponse message, length delimited. Does not implicitly {@link product.ProductListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof product.ProductListResponse
         * @static
         * @param {product.IProductListResponse} message ProductListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProductListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof product.ProductListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {product.ProductListResponse} ProductListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductListResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.ProductListResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.products && message.products.length))
                            message.products = [];
                        message.products.push($root.product.ProductList.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProductListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof product.ProductListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {product.ProductListResponse} ProductListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProductListResponse message.
         * @function verify
         * @memberof product.ProductListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProductListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.products != null && message.hasOwnProperty("products")) {
                if (!Array.isArray(message.products))
                    return "products: array expected";
                for (let i = 0; i < message.products.length; ++i) {
                    let error = $root.product.ProductList.verify(message.products[i]);
                    if (error)
                        return "products." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ProductListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof product.ProductListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {product.ProductListResponse} ProductListResponse
         */
        ProductListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.product.ProductListResponse)
                return object;
            let message = new $root.product.ProductListResponse();
            if (object.products) {
                if (!Array.isArray(object.products))
                    throw TypeError(".product.ProductListResponse.products: array expected");
                message.products = [];
                for (let i = 0; i < object.products.length; ++i) {
                    if (typeof object.products[i] !== "object")
                        throw TypeError(".product.ProductListResponse.products: object expected");
                    message.products[i] = $root.product.ProductList.fromObject(object.products[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ProductListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof product.ProductListResponse
         * @static
         * @param {product.ProductListResponse} message ProductListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProductListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.products = [];
            if (message.products && message.products.length) {
                object.products = [];
                for (let j = 0; j < message.products.length; ++j)
                    object.products[j] = $root.product.ProductList.toObject(message.products[j], options);
            }
            return object;
        };

        /**
         * Converts this ProductListResponse to JSON.
         * @function toJSON
         * @memberof product.ProductListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProductListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProductListResponse
         * @function getTypeUrl
         * @memberof product.ProductListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProductListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/product.ProductListResponse";
        };

        return ProductListResponse;
    })();

    product.SingleProduct = (function() {

        /**
         * Properties of a SingleProduct.
         * @memberof product
         * @interface ISingleProduct
         * @property {number|null} [id] SingleProduct id
         * @property {string|null} [name] SingleProduct name
         * @property {string|null} [description] SingleProduct description
         * @property {string|null} [category] SingleProduct category
         * @property {number|null} [totalQuantity] SingleProduct totalQuantity
         * @property {number|null} [totalValue] SingleProduct totalValue
         * @property {number|null} [variantCount] SingleProduct variantCount
         */

        /**
         * Constructs a new SingleProduct.
         * @memberof product
         * @classdesc Represents a SingleProduct.
         * @implements ISingleProduct
         * @constructor
         * @param {product.ISingleProduct=} [properties] Properties to set
         */
        function SingleProduct(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SingleProduct id.
         * @member {number} id
         * @memberof product.SingleProduct
         * @instance
         */
        SingleProduct.prototype.id = 0;

        /**
         * SingleProduct name.
         * @member {string} name
         * @memberof product.SingleProduct
         * @instance
         */
        SingleProduct.prototype.name = "";

        /**
         * SingleProduct description.
         * @member {string} description
         * @memberof product.SingleProduct
         * @instance
         */
        SingleProduct.prototype.description = "";

        /**
         * SingleProduct category.
         * @member {string} category
         * @memberof product.SingleProduct
         * @instance
         */
        SingleProduct.prototype.category = "";

        /**
         * SingleProduct totalQuantity.
         * @member {number} totalQuantity
         * @memberof product.SingleProduct
         * @instance
         */
        SingleProduct.prototype.totalQuantity = 0;

        /**
         * SingleProduct totalValue.
         * @member {number} totalValue
         * @memberof product.SingleProduct
         * @instance
         */
        SingleProduct.prototype.totalValue = 0;

        /**
         * SingleProduct variantCount.
         * @member {number} variantCount
         * @memberof product.SingleProduct
         * @instance
         */
        SingleProduct.prototype.variantCount = 0;

        /**
         * Creates a new SingleProduct instance using the specified properties.
         * @function create
         * @memberof product.SingleProduct
         * @static
         * @param {product.ISingleProduct=} [properties] Properties to set
         * @returns {product.SingleProduct} SingleProduct instance
         */
        SingleProduct.create = function create(properties) {
            return new SingleProduct(properties);
        };

        /**
         * Encodes the specified SingleProduct message. Does not implicitly {@link product.SingleProduct.verify|verify} messages.
         * @function encode
         * @memberof product.SingleProduct
         * @static
         * @param {product.ISingleProduct} message SingleProduct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SingleProduct.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.category);
            if (message.totalQuantity != null && Object.hasOwnProperty.call(message, "totalQuantity"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.totalQuantity);
            if (message.totalValue != null && Object.hasOwnProperty.call(message, "totalValue"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.totalValue);
            if (message.variantCount != null && Object.hasOwnProperty.call(message, "variantCount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.variantCount);
            return writer;
        };

        /**
         * Encodes the specified SingleProduct message, length delimited. Does not implicitly {@link product.SingleProduct.verify|verify} messages.
         * @function encodeDelimited
         * @memberof product.SingleProduct
         * @static
         * @param {product.ISingleProduct} message SingleProduct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SingleProduct.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SingleProduct message from the specified reader or buffer.
         * @function decode
         * @memberof product.SingleProduct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {product.SingleProduct} SingleProduct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SingleProduct.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.SingleProduct();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.description = reader.string();
                        break;
                    }
                case 4: {
                        message.category = reader.string();
                        break;
                    }
                case 5: {
                        message.totalQuantity = reader.int32();
                        break;
                    }
                case 6: {
                        message.totalValue = reader.int32();
                        break;
                    }
                case 7: {
                        message.variantCount = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SingleProduct message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof product.SingleProduct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {product.SingleProduct} SingleProduct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SingleProduct.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SingleProduct message.
         * @function verify
         * @memberof product.SingleProduct
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SingleProduct.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.category != null && message.hasOwnProperty("category"))
                if (!$util.isString(message.category))
                    return "category: string expected";
            if (message.totalQuantity != null && message.hasOwnProperty("totalQuantity"))
                if (!$util.isInteger(message.totalQuantity))
                    return "totalQuantity: integer expected";
            if (message.totalValue != null && message.hasOwnProperty("totalValue"))
                if (!$util.isInteger(message.totalValue))
                    return "totalValue: integer expected";
            if (message.variantCount != null && message.hasOwnProperty("variantCount"))
                if (!$util.isInteger(message.variantCount))
                    return "variantCount: integer expected";
            return null;
        };

        /**
         * Creates a SingleProduct message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof product.SingleProduct
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {product.SingleProduct} SingleProduct
         */
        SingleProduct.fromObject = function fromObject(object) {
            if (object instanceof $root.product.SingleProduct)
                return object;
            let message = new $root.product.SingleProduct();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.category != null)
                message.category = String(object.category);
            if (object.totalQuantity != null)
                message.totalQuantity = object.totalQuantity | 0;
            if (object.totalValue != null)
                message.totalValue = object.totalValue | 0;
            if (object.variantCount != null)
                message.variantCount = object.variantCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a SingleProduct message. Also converts values to other types if specified.
         * @function toObject
         * @memberof product.SingleProduct
         * @static
         * @param {product.SingleProduct} message SingleProduct
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SingleProduct.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.description = "";
                object.category = "";
                object.totalQuantity = 0;
                object.totalValue = 0;
                object.variantCount = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = message.category;
            if (message.totalQuantity != null && message.hasOwnProperty("totalQuantity"))
                object.totalQuantity = message.totalQuantity;
            if (message.totalValue != null && message.hasOwnProperty("totalValue"))
                object.totalValue = message.totalValue;
            if (message.variantCount != null && message.hasOwnProperty("variantCount"))
                object.variantCount = message.variantCount;
            return object;
        };

        /**
         * Converts this SingleProduct to JSON.
         * @function toJSON
         * @memberof product.SingleProduct
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SingleProduct.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SingleProduct
         * @function getTypeUrl
         * @memberof product.SingleProduct
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SingleProduct.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/product.SingleProduct";
        };

        return SingleProduct;
    })();

    product.ProductVariants = (function() {

        /**
         * Properties of a ProductVariants.
         * @memberof product
         * @interface IProductVariants
         * @property {number|null} [sn] ProductVariants sn
         * @property {string|null} [id] ProductVariants id
         * @property {number|null} [productId] ProductVariants productId
         * @property {string|null} [productName] ProductVariants productName
         * @property {string|null} [name] ProductVariants name
         * @property {number|null} [price] ProductVariants price
         * @property {number|null} [qty] ProductVariants qty
         * @property {number|null} [value] ProductVariants value
         * @property {Object.<string,string>|null} [attrs] ProductVariants attrs
         * @property {Array.<string>|null} [keys] ProductVariants keys
         */

        /**
         * Constructs a new ProductVariants.
         * @memberof product
         * @classdesc Represents a ProductVariants.
         * @implements IProductVariants
         * @constructor
         * @param {product.IProductVariants=} [properties] Properties to set
         */
        function ProductVariants(properties) {
            this.attrs = {};
            this.keys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProductVariants sn.
         * @member {number} sn
         * @memberof product.ProductVariants
         * @instance
         */
        ProductVariants.prototype.sn = 0;

        /**
         * ProductVariants id.
         * @member {string} id
         * @memberof product.ProductVariants
         * @instance
         */
        ProductVariants.prototype.id = "";

        /**
         * ProductVariants productId.
         * @member {number} productId
         * @memberof product.ProductVariants
         * @instance
         */
        ProductVariants.prototype.productId = 0;

        /**
         * ProductVariants productName.
         * @member {string} productName
         * @memberof product.ProductVariants
         * @instance
         */
        ProductVariants.prototype.productName = "";

        /**
         * ProductVariants name.
         * @member {string} name
         * @memberof product.ProductVariants
         * @instance
         */
        ProductVariants.prototype.name = "";

        /**
         * ProductVariants price.
         * @member {number} price
         * @memberof product.ProductVariants
         * @instance
         */
        ProductVariants.prototype.price = 0;

        /**
         * ProductVariants qty.
         * @member {number} qty
         * @memberof product.ProductVariants
         * @instance
         */
        ProductVariants.prototype.qty = 0;

        /**
         * ProductVariants value.
         * @member {number} value
         * @memberof product.ProductVariants
         * @instance
         */
        ProductVariants.prototype.value = 0;

        /**
         * ProductVariants attrs.
         * @member {Object.<string,string>} attrs
         * @memberof product.ProductVariants
         * @instance
         */
        ProductVariants.prototype.attrs = $util.emptyObject;

        /**
         * ProductVariants keys.
         * @member {Array.<string>} keys
         * @memberof product.ProductVariants
         * @instance
         */
        ProductVariants.prototype.keys = $util.emptyArray;

        /**
         * Creates a new ProductVariants instance using the specified properties.
         * @function create
         * @memberof product.ProductVariants
         * @static
         * @param {product.IProductVariants=} [properties] Properties to set
         * @returns {product.ProductVariants} ProductVariants instance
         */
        ProductVariants.create = function create(properties) {
            return new ProductVariants(properties);
        };

        /**
         * Encodes the specified ProductVariants message. Does not implicitly {@link product.ProductVariants.verify|verify} messages.
         * @function encode
         * @memberof product.ProductVariants
         * @static
         * @param {product.IProductVariants} message ProductVariants message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductVariants.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sn != null && Object.hasOwnProperty.call(message, "sn"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sn);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            if (message.productId != null && Object.hasOwnProperty.call(message, "productId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.productId);
            if (message.productName != null && Object.hasOwnProperty.call(message, "productName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.productName);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.name);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.price);
            if (message.qty != null && Object.hasOwnProperty.call(message, "qty"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.qty);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.value);
            if (message.attrs != null && Object.hasOwnProperty.call(message, "attrs"))
                for (let keys = Object.keys(message.attrs), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.attrs[keys[i]]).ldelim();
            if (message.keys != null && message.keys.length)
                for (let i = 0; i < message.keys.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.keys[i]);
            return writer;
        };

        /**
         * Encodes the specified ProductVariants message, length delimited. Does not implicitly {@link product.ProductVariants.verify|verify} messages.
         * @function encodeDelimited
         * @memberof product.ProductVariants
         * @static
         * @param {product.IProductVariants} message ProductVariants message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductVariants.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProductVariants message from the specified reader or buffer.
         * @function decode
         * @memberof product.ProductVariants
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {product.ProductVariants} ProductVariants
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductVariants.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.ProductVariants(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.sn = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.string();
                        break;
                    }
                case 3: {
                        message.productId = reader.int32();
                        break;
                    }
                case 4: {
                        message.productName = reader.string();
                        break;
                    }
                case 5: {
                        message.name = reader.string();
                        break;
                    }
                case 6: {
                        message.price = reader.int32();
                        break;
                    }
                case 7: {
                        message.qty = reader.int32();
                        break;
                    }
                case 8: {
                        message.value = reader.int32();
                        break;
                    }
                case 9: {
                        if (message.attrs === $util.emptyObject)
                            message.attrs = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.attrs[key] = value;
                        break;
                    }
                case 10: {
                        if (!(message.keys && message.keys.length))
                            message.keys = [];
                        message.keys.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProductVariants message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof product.ProductVariants
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {product.ProductVariants} ProductVariants
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductVariants.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProductVariants message.
         * @function verify
         * @memberof product.ProductVariants
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProductVariants.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sn != null && message.hasOwnProperty("sn"))
                if (!$util.isInteger(message.sn))
                    return "sn: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.productId != null && message.hasOwnProperty("productId"))
                if (!$util.isInteger(message.productId))
                    return "productId: integer expected";
            if (message.productName != null && message.hasOwnProperty("productName"))
                if (!$util.isString(message.productName))
                    return "productName: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price))
                    return "price: integer expected";
            if (message.qty != null && message.hasOwnProperty("qty"))
                if (!$util.isInteger(message.qty))
                    return "qty: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            if (message.attrs != null && message.hasOwnProperty("attrs")) {
                if (!$util.isObject(message.attrs))
                    return "attrs: object expected";
                let key = Object.keys(message.attrs);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.attrs[key[i]]))
                        return "attrs: string{k:string} expected";
            }
            if (message.keys != null && message.hasOwnProperty("keys")) {
                if (!Array.isArray(message.keys))
                    return "keys: array expected";
                for (let i = 0; i < message.keys.length; ++i)
                    if (!$util.isString(message.keys[i]))
                        return "keys: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ProductVariants message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof product.ProductVariants
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {product.ProductVariants} ProductVariants
         */
        ProductVariants.fromObject = function fromObject(object) {
            if (object instanceof $root.product.ProductVariants)
                return object;
            let message = new $root.product.ProductVariants();
            if (object.sn != null)
                message.sn = object.sn | 0;
            if (object.id != null)
                message.id = String(object.id);
            if (object.productId != null)
                message.productId = object.productId | 0;
            if (object.productName != null)
                message.productName = String(object.productName);
            if (object.name != null)
                message.name = String(object.name);
            if (object.price != null)
                message.price = object.price | 0;
            if (object.qty != null)
                message.qty = object.qty | 0;
            if (object.value != null)
                message.value = object.value | 0;
            if (object.attrs) {
                if (typeof object.attrs !== "object")
                    throw TypeError(".product.ProductVariants.attrs: object expected");
                message.attrs = {};
                for (let keys = Object.keys(object.attrs), i = 0; i < keys.length; ++i)
                    message.attrs[keys[i]] = String(object.attrs[keys[i]]);
            }
            if (object.keys) {
                if (!Array.isArray(object.keys))
                    throw TypeError(".product.ProductVariants.keys: array expected");
                message.keys = [];
                for (let i = 0; i < object.keys.length; ++i)
                    message.keys[i] = String(object.keys[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ProductVariants message. Also converts values to other types if specified.
         * @function toObject
         * @memberof product.ProductVariants
         * @static
         * @param {product.ProductVariants} message ProductVariants
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProductVariants.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.keys = [];
            if (options.objects || options.defaults)
                object.attrs = {};
            if (options.defaults) {
                object.sn = 0;
                object.id = "";
                object.productId = 0;
                object.productName = "";
                object.name = "";
                object.price = 0;
                object.qty = 0;
                object.value = 0;
            }
            if (message.sn != null && message.hasOwnProperty("sn"))
                object.sn = message.sn;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.productId != null && message.hasOwnProperty("productId"))
                object.productId = message.productId;
            if (message.productName != null && message.hasOwnProperty("productName"))
                object.productName = message.productName;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = message.price;
            if (message.qty != null && message.hasOwnProperty("qty"))
                object.qty = message.qty;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            let keys2;
            if (message.attrs && (keys2 = Object.keys(message.attrs)).length) {
                object.attrs = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.attrs[keys2[j]] = message.attrs[keys2[j]];
            }
            if (message.keys && message.keys.length) {
                object.keys = [];
                for (let j = 0; j < message.keys.length; ++j)
                    object.keys[j] = message.keys[j];
            }
            return object;
        };

        /**
         * Converts this ProductVariants to JSON.
         * @function toJSON
         * @memberof product.ProductVariants
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProductVariants.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProductVariants
         * @function getTypeUrl
         * @memberof product.ProductVariants
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProductVariants.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/product.ProductVariants";
        };

        return ProductVariants;
    })();

    product.ProductResponse = (function() {

        /**
         * Properties of a ProductResponse.
         * @memberof product
         * @interface IProductResponse
         * @property {product.ISingleProduct|null} [product] ProductResponse product
         * @property {Array.<product.IProductVariants>|null} [variants] ProductResponse variants
         */

        /**
         * Constructs a new ProductResponse.
         * @memberof product
         * @classdesc Represents a ProductResponse.
         * @implements IProductResponse
         * @constructor
         * @param {product.IProductResponse=} [properties] Properties to set
         */
        function ProductResponse(properties) {
            this.variants = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProductResponse product.
         * @member {product.ISingleProduct|null|undefined} product
         * @memberof product.ProductResponse
         * @instance
         */
        ProductResponse.prototype.product = null;

        /**
         * ProductResponse variants.
         * @member {Array.<product.IProductVariants>} variants
         * @memberof product.ProductResponse
         * @instance
         */
        ProductResponse.prototype.variants = $util.emptyArray;

        /**
         * Creates a new ProductResponse instance using the specified properties.
         * @function create
         * @memberof product.ProductResponse
         * @static
         * @param {product.IProductResponse=} [properties] Properties to set
         * @returns {product.ProductResponse} ProductResponse instance
         */
        ProductResponse.create = function create(properties) {
            return new ProductResponse(properties);
        };

        /**
         * Encodes the specified ProductResponse message. Does not implicitly {@link product.ProductResponse.verify|verify} messages.
         * @function encode
         * @memberof product.ProductResponse
         * @static
         * @param {product.IProductResponse} message ProductResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.product != null && Object.hasOwnProperty.call(message, "product"))
                $root.product.SingleProduct.encode(message.product, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.variants != null && message.variants.length)
                for (let i = 0; i < message.variants.length; ++i)
                    $root.product.ProductVariants.encode(message.variants[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ProductResponse message, length delimited. Does not implicitly {@link product.ProductResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof product.ProductResponse
         * @static
         * @param {product.IProductResponse} message ProductResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProductResponse message from the specified reader or buffer.
         * @function decode
         * @memberof product.ProductResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {product.ProductResponse} ProductResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.ProductResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.product = $root.product.SingleProduct.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.variants && message.variants.length))
                            message.variants = [];
                        message.variants.push($root.product.ProductVariants.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProductResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof product.ProductResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {product.ProductResponse} ProductResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProductResponse message.
         * @function verify
         * @memberof product.ProductResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProductResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.product != null && message.hasOwnProperty("product")) {
                let error = $root.product.SingleProduct.verify(message.product);
                if (error)
                    return "product." + error;
            }
            if (message.variants != null && message.hasOwnProperty("variants")) {
                if (!Array.isArray(message.variants))
                    return "variants: array expected";
                for (let i = 0; i < message.variants.length; ++i) {
                    let error = $root.product.ProductVariants.verify(message.variants[i]);
                    if (error)
                        return "variants." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ProductResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof product.ProductResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {product.ProductResponse} ProductResponse
         */
        ProductResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.product.ProductResponse)
                return object;
            let message = new $root.product.ProductResponse();
            if (object.product != null) {
                if (typeof object.product !== "object")
                    throw TypeError(".product.ProductResponse.product: object expected");
                message.product = $root.product.SingleProduct.fromObject(object.product);
            }
            if (object.variants) {
                if (!Array.isArray(object.variants))
                    throw TypeError(".product.ProductResponse.variants: array expected");
                message.variants = [];
                for (let i = 0; i < object.variants.length; ++i) {
                    if (typeof object.variants[i] !== "object")
                        throw TypeError(".product.ProductResponse.variants: object expected");
                    message.variants[i] = $root.product.ProductVariants.fromObject(object.variants[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ProductResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof product.ProductResponse
         * @static
         * @param {product.ProductResponse} message ProductResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProductResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.variants = [];
            if (options.defaults)
                object.product = null;
            if (message.product != null && message.hasOwnProperty("product"))
                object.product = $root.product.SingleProduct.toObject(message.product, options);
            if (message.variants && message.variants.length) {
                object.variants = [];
                for (let j = 0; j < message.variants.length; ++j)
                    object.variants[j] = $root.product.ProductVariants.toObject(message.variants[j], options);
            }
            return object;
        };

        /**
         * Converts this ProductResponse to JSON.
         * @function toJSON
         * @memberof product.ProductResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProductResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProductResponse
         * @function getTypeUrl
         * @memberof product.ProductResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProductResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/product.ProductResponse";
        };

        return ProductResponse;
    })();

    product.UpdateProductRequest = (function() {

        /**
         * Properties of an UpdateProductRequest.
         * @memberof product
         * @interface IUpdateProductRequest
         * @property {number|null} [id] UpdateProductRequest id
         * @property {string|null} [name] UpdateProductRequest name
         * @property {string|null} [description] UpdateProductRequest description
         * @property {string|null} [category] UpdateProductRequest category
         */

        /**
         * Constructs a new UpdateProductRequest.
         * @memberof product
         * @classdesc Represents an UpdateProductRequest.
         * @implements IUpdateProductRequest
         * @constructor
         * @param {product.IUpdateProductRequest=} [properties] Properties to set
         */
        function UpdateProductRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateProductRequest id.
         * @member {number} id
         * @memberof product.UpdateProductRequest
         * @instance
         */
        UpdateProductRequest.prototype.id = 0;

        /**
         * UpdateProductRequest name.
         * @member {string} name
         * @memberof product.UpdateProductRequest
         * @instance
         */
        UpdateProductRequest.prototype.name = "";

        /**
         * UpdateProductRequest description.
         * @member {string} description
         * @memberof product.UpdateProductRequest
         * @instance
         */
        UpdateProductRequest.prototype.description = "";

        /**
         * UpdateProductRequest category.
         * @member {string} category
         * @memberof product.UpdateProductRequest
         * @instance
         */
        UpdateProductRequest.prototype.category = "";

        /**
         * Creates a new UpdateProductRequest instance using the specified properties.
         * @function create
         * @memberof product.UpdateProductRequest
         * @static
         * @param {product.IUpdateProductRequest=} [properties] Properties to set
         * @returns {product.UpdateProductRequest} UpdateProductRequest instance
         */
        UpdateProductRequest.create = function create(properties) {
            return new UpdateProductRequest(properties);
        };

        /**
         * Encodes the specified UpdateProductRequest message. Does not implicitly {@link product.UpdateProductRequest.verify|verify} messages.
         * @function encode
         * @memberof product.UpdateProductRequest
         * @static
         * @param {product.IUpdateProductRequest} message UpdateProductRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateProductRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.category);
            return writer;
        };

        /**
         * Encodes the specified UpdateProductRequest message, length delimited. Does not implicitly {@link product.UpdateProductRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof product.UpdateProductRequest
         * @static
         * @param {product.IUpdateProductRequest} message UpdateProductRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateProductRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateProductRequest message from the specified reader or buffer.
         * @function decode
         * @memberof product.UpdateProductRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {product.UpdateProductRequest} UpdateProductRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateProductRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.UpdateProductRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.description = reader.string();
                        break;
                    }
                case 4: {
                        message.category = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateProductRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof product.UpdateProductRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {product.UpdateProductRequest} UpdateProductRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateProductRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateProductRequest message.
         * @function verify
         * @memberof product.UpdateProductRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateProductRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.category != null && message.hasOwnProperty("category"))
                if (!$util.isString(message.category))
                    return "category: string expected";
            return null;
        };

        /**
         * Creates an UpdateProductRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof product.UpdateProductRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {product.UpdateProductRequest} UpdateProductRequest
         */
        UpdateProductRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.product.UpdateProductRequest)
                return object;
            let message = new $root.product.UpdateProductRequest();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.category != null)
                message.category = String(object.category);
            return message;
        };

        /**
         * Creates a plain object from an UpdateProductRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof product.UpdateProductRequest
         * @static
         * @param {product.UpdateProductRequest} message UpdateProductRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateProductRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.description = "";
                object.category = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = message.category;
            return object;
        };

        /**
         * Converts this UpdateProductRequest to JSON.
         * @function toJSON
         * @memberof product.UpdateProductRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateProductRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateProductRequest
         * @function getTypeUrl
         * @memberof product.UpdateProductRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateProductRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/product.UpdateProductRequest";
        };

        return UpdateProductRequest;
    })();

    return product;
})();

export { $root as default };
