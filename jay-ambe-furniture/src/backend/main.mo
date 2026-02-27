import Time "mo:core/Time";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  type GalleryCategory = {
    #sofa;
    #diningTable;
    #bedroom;
    #modularKitchen;
    #tvUnit;
    #wardrobe;
    #studyTable;
    #woodenFlooring;
    #woodenCeiling;
  };

  type GalleryItem = {
    id : Nat;
    title : Text;
    category : GalleryCategory;
    blob : Storage.ExternalBlob;
  };

  type ContactFormSubmission = {
    name : Text;
    phoneNumber : Text;
    message : Text;
    timestamp : Time.Time;
  };

  public type UserProfile = {
    name : Text;
  };

  module GalleryItem {
    public func compare(a : GalleryItem, b : GalleryItem) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinStorage();

  let galleryItems = Map.empty<Nat, GalleryItem>();
  let contactFormSubmissions = Map.empty<Nat, ContactFormSubmission>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  var galleryItemIdCounter = 0;
  var contactFormIdCounter = 0;

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Gallery Management - Public Read Access
  public query func getAllGalleryItems() : async [GalleryItem] {
    galleryItems.values().toArray().sort();
  };

  public query func getGalleryItemsByCategory(category : GalleryCategory) : async [GalleryItem] {
    galleryItems.values().toArray().filter(
      func(item : GalleryItem) : Bool {
        item.category == category;
      }
    );
  };

  // Gallery Management - Admin Only
  public shared ({ caller }) func addGalleryItem(title : Text, category : GalleryCategory, blob : Storage.ExternalBlob) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add gallery items");
    };

    let newItem : GalleryItem = {
      id = galleryItemIdCounter;
      title;
      category;
      blob;
    };

    galleryItems.add(galleryItemIdCounter, newItem);
    galleryItemIdCounter += 1;
    newItem.id;
  };

  public shared ({ caller }) func deleteGalleryItem(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete gallery items");
    };

    switch (galleryItems.get(id)) {
      case (null) {
        Runtime.trap("Gallery item does not exist");
      };
      case (?_) {
        galleryItems.remove(id);
      };
    };
  };

  // Contact Form - Public Submit
  public shared func submitContactForm(name : Text, phoneNumber : Text, message : Text) : async () {
    let submission : ContactFormSubmission = {
      name;
      phoneNumber;
      message;
      timestamp = Time.now();
    };

    contactFormSubmissions.add(contactFormIdCounter, submission);
    contactFormIdCounter += 1;
  };

  // Contact Form - Admin Only View
  public query ({ caller }) func getAllContactFormSubmissions() : async [ContactFormSubmission] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view contact submissions");
    };
    contactFormSubmissions.values().toArray();
  };
};
